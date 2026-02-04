// admin-script.js
// MNO Dashboard Admin Back-office Script

// 전역 상태
let adminState = {
    data: null,
    currentView: 'categories', // 'categories', 'subcategories', 'tasks'
    selectedCategory: null,
    selectedSubcategory: null,
    currentAction: null, // 'create', 'edit'
    currentEntity: null, // 현재 편집 중인 엔티티
    isAllExpanded: true, // 전체 펼침 상태
    validOrganizations: [
        'MNO AT/DT기획담당',
        'Product&Brand본부',
        'Sales&Marketing본부',
        'Enterprise사업본부',
        'AT/DT센터',
        'Network센터',
        '안전보건실'
    ]
};

// DOM 요소
const elements = {
    treeContainer: document.getElementById('treeContainer'),
    addButton: document.getElementById('addButton'),
    toggleAllButton: document.getElementById('toggleAllButton'),
    toggleIcon: document.getElementById('toggleIcon'),
    toggleText: document.getElementById('toggleText'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalTitle: document.getElementById('modalTitle'),
    modalForm: document.getElementById('modalForm'),
    submitButton: document.getElementById('submitButton'),
    cancelButton: document.getElementById('cancelButton'),
    closeModalButton: document.getElementById('closeModalButton'),
    toast: document.getElementById('toast'),
    syncAllButton: document.getElementById('syncAllButton'),
    backupButton: document.getElementById('backupButton'),
    dashboardButton: document.getElementById('dashboardButton'),
    backupModalOverlay: document.getElementById('backupModalOverlay'),
    backupList: document.getElementById('backupList'),
    closeBackupModalButton: document.getElementById('closeBackupModalButton'),
    closeBackupButton: document.getElementById('closeBackupButton'),
    confirmDialog: document.getElementById('confirmDialog'),
    confirmTitle: document.getElementById('confirmTitle'),
    confirmMessage: document.getElementById('confirmMessage'),
    confirmOkButton: document.getElementById('confirmOkButton'),
    confirmCancelButton: document.getElementById('confirmCancelButton')
};

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    initializeAdmin();
});

function initializeAdmin() {
    loadData();
    setupEventListeners();
    renderUnifiedTree();
    // 기본적으로 전체 펼치기
    expandAll();
}

// 데이터 로드
function loadData() {
    const stored = window.DataManager.getDashboardData();

    if (stored && stored.categories) {
        adminState.data = stored;
    } else {
        // 기본 데이터가 없으면 빈 구조 생성
        adminState.data = {
            version: "1.0.0",
            lastModified: new Date().toISOString(),
            categories: [],
            taskDetails: {}
        };
    }
}

// 데이터 저장
function saveData() {
    const success = window.DataManager.saveDashboardData(adminState.data);
    if (success) {
        showToast('저장되었습니다', 'success');
        renderUnifiedTree();
        return true;
    } else {
        showToast('저장에 실패했습니다', 'error');
        return false;
    }
}

// ===== 통합 트리 렌더링 =====
function renderUnifiedTree() {
    if (!adminState.data || !adminState.data.categories || adminState.data.categories.length === 0) {
        elements.treeContainer.innerHTML = '<div class="placeholder-message">핵심지표를 추가해주세요</div>';
        return;
    }

    const html = adminState.data.categories.map(category => {
        return renderCategoryRow(category);
    }).join('');

    elements.treeContainer.innerHTML = html;
    attachTreeEventListeners();
}

function renderCategoryRow(category) {
    const childCount = window.DataManager.countCategoryChildren(category);
    const hasChildren = category.subcategories && category.subcategories.length > 0;

    return `
        <div class="tree-row" data-type="category" data-id="${category.id}" draggable="true">
            <div class="tree-row-header">
                <div class="tree-row-toggle">${hasChildren ? '▸' : ''}</div>
                <div class="tree-row-icon drag-handle" title="드래그하여 순서 변경">⋮⋮</div>
                <div class="tree-row-content">
                    <div class="tree-row-info">
                        <div class="tree-row-title">${category.title}</div>
                        <div class="tree-row-meta">
                            <span class="tree-row-badge ${category.type}">${category.type === 'core' ? '핵심지표' : '기본기 지표'}</span>
                            <span>대분류 ${childCount.subcategories}개</span>
                            <span>과제 ${childCount.tasks}개</span>
                        </div>
                    </div>
                    <div class="tree-row-metrics">
                        <div class="tree-row-metric">
                            <div class="tree-row-metric-label">현재</div>
                            <div class="tree-row-metric-value">${category.metrics.current} ${category.metrics.unit}</div>
                        </div>
                        <div class="tree-row-metric">
                            <div class="tree-row-metric-label">목표</div>
                            <div class="tree-row-metric-value target">${category.metrics.target} ${category.metrics.unit}</div>
                        </div>
                        <div class="tree-row-metric">
                            <div class="tree-row-metric-label">달성률</div>
                            <div class="tree-row-metric-value achievement">${category.metrics.achievement}</div>
                        </div>
                    </div>
                    <div class="tree-row-actions">
                        <button class="tree-row-button add" onclick="handleAddSubcategory('${category.id}', event)">+ 대분류</button>
                        <button class="tree-row-button edit" onclick="editCategory('${category.id}')">편집</button>
                    </div>
                </div>
            </div>
            ${hasChildren ? `<div class="tree-row-children">${category.subcategories.map(sub => renderSubcategoryRow(category.id, sub)).join('')}</div>` : ''}
        </div>
    `;
}

function renderSubcategoryRow(categoryId, subcategory) {
    const taskCount = subcategory.tasks ? subcategory.tasks.length : 0;
    const hasChildren = taskCount > 0;

    return `
        <div class="tree-row subcategory" data-type="subcategory" data-id="${subcategory.id}" data-parent-id="${categoryId}" draggable="true">
            <div class="tree-row-header">
                <div class="tree-row-toggle">${hasChildren ? '▸' : ''}</div>
                <div class="tree-row-icon drag-handle" title="드래그하여 순서 변경">⋮⋮</div>
                <div class="tree-row-content">
                    <div class="tree-row-info">
                        <div class="tree-row-title">${subcategory.title}</div>
                        <div class="tree-row-meta">
                            <span>과제 ${taskCount}개</span>
                        </div>
                    </div>
                    <div class="tree-row-actions">
                        <button class="tree-row-button add" onclick="handleAddTask('${categoryId}', '${subcategory.id}', event)">+ 과제</button>
                        <button class="tree-row-button edit" onclick="editSubcategory('${categoryId}', '${subcategory.id}')">편집</button>
                    </div>
                </div>
            </div>
            ${hasChildren ? `<div class="tree-row-children">${subcategory.tasks.map(task => renderTaskRow(task, categoryId, subcategory.id)).join('')}</div>` : ''}
        </div>
    `;
}

function renderTaskRow(task, categoryId, subcategoryId) {
    return `
        <div class="tree-row task" data-type="task" data-id="${task.id}" data-parent-category-id="${categoryId}" data-parent-subcategory-id="${subcategoryId}" draggable="true">
            <div class="tree-row-header">
                <div class="tree-row-toggle"></div>
                <div class="tree-row-icon drag-handle" title="드래그하여 순서 변경">⋮⋮</div>
                <div class="tree-row-content">
                    <div class="tree-row-info">
                        <div class="tree-row-title">${task.title}</div>
                        <div class="tree-row-meta">
                            <span>${task.organization}</span>
                        </div>
                    </div>
                    <div class="tree-row-metrics">
                        <div class="tree-row-metric">
                            <div class="tree-row-metric-label">현재</div>
                            <div class="tree-row-metric-value">${task.metrics.current} ${task.metrics.unit}</div>
                        </div>
                        <div class="tree-row-metric">
                            <div class="tree-row-metric-label">목표</div>
                            <div class="tree-row-metric-value target">${task.metrics.target} ${task.metrics.unit}</div>
                        </div>
                        <div class="tree-row-metric">
                            <div class="tree-row-metric-label">달성률</div>
                            <div class="tree-row-metric-value achievement">${task.metrics.achievement}</div>
                        </div>
                    </div>
                    <div class="tree-row-actions">
                        <button class="tree-row-button sync" onclick="syncTask('${task.id}')">불러오기</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 드래그 중인 요소 추적
let draggedElement = null;
let dropPosition = null; // 'before' or 'after'

// 트리 이벤트 리스너 연결
function attachTreeEventListeners() {
    // 토글 버튼 클릭 이벤트
    elements.treeContainer.querySelectorAll('.tree-row-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const row = toggle.closest('.tree-row');
            if (toggle.textContent.trim() !== '') {
                row.classList.toggle('expanded');
            }
        });
    });

    // 행 전체 클릭 시 토글
    elements.treeContainer.querySelectorAll('.tree-row-header').forEach(header => {
        header.addEventListener('click', (e) => {
            // 버튼 클릭은 제외
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                return;
            }
            // 드래그 핸들 클릭은 제외
            if (e.target.classList.contains('drag-handle')) {
                return;
            }
            const row = header.closest('.tree-row');
            const toggle = row.querySelector('.tree-row-toggle');
            if (toggle && toggle.textContent.trim() !== '') {
                row.classList.toggle('expanded');
            }
        });
    });

    // 드래그 앤 드롭 이벤트
    elements.treeContainer.querySelectorAll('.tree-row[draggable="true"]').forEach(row => {
        row.addEventListener('dragstart', handleDragStart);
        row.addEventListener('dragover', handleDragOver);
        row.addEventListener('drop', handleDrop);
        row.addEventListener('dragend', handleDragEnd);
        // dragleave는 제거 - dragover에서 모든 인디케이터 관리
    });
}

// 드래그 시작
function handleDragStart(e) {
    draggedElement = e.currentTarget;
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.innerHTML);
}

// 드래그 오버
function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();

    const targetRow = e.currentTarget;

    // 자기 자신인 경우 스킵
    if (!draggedElement || targetRow === draggedElement) {
        removeAllDropIndicators();
        e.dataTransfer.dropEffect = 'none';
        return false;
    }

    // 같은 타입과 같은 부모인지 확인
    const draggedType = draggedElement.dataset.type;
    const targetType = targetRow.dataset.type;

    if (draggedType !== targetType) {
        removeAllDropIndicators();
        e.dataTransfer.dropEffect = 'none';
        return false;
    }

    // 같은 부모인지 확인
    if (draggedType === 'subcategory') {
        if (draggedElement.dataset.parentId !== targetRow.dataset.parentId) {
            removeAllDropIndicators();
            e.dataTransfer.dropEffect = 'none';
            return false;
        }
    } else if (draggedType === 'task') {
        if (draggedElement.dataset.parentSubcategoryId !== targetRow.dataset.parentSubcategoryId) {
            removeAllDropIndicators();
            e.dataTransfer.dropEffect = 'none';
            return false;
        }
    }

    // 드롭 가능
    e.dataTransfer.dropEffect = 'move';

    // 마우스 위치에 따라 위/아래 결정
    const rect = targetRow.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    const mouseY = e.clientY;

    // 모든 drop indicator 제거
    removeAllDropIndicators();

    // 새로운 drop indicator 추가
    if (mouseY < midpoint) {
        // 위에 삽입
        dropPosition = 'before';
        targetRow.classList.add('drop-before');
    } else {
        // 아래에 삽입
        dropPosition = 'after';
        targetRow.classList.add('drop-after');
    }

    return false;
}

// 드래그 리브
function handleDragLeave(e) {
    const targetRow = e.currentTarget;
    targetRow.classList.remove('drop-before', 'drop-after');
}

// 모든 드롭 인디케이터 제거
function removeAllDropIndicators() {
    elements.treeContainer.querySelectorAll('.tree-row').forEach(row => {
        row.classList.remove('drop-before', 'drop-after');
    });
}

// 드롭
function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }

    const targetRow = e.currentTarget;

    if (draggedElement === targetRow) return false;

    // 같은 타입과 같은 부모인지 확인
    const draggedType = draggedElement.dataset.type;
    const targetType = targetRow.dataset.type;

    if (draggedType !== targetType) return false;

    // 같은 부모인지 확인
    if (draggedType === 'subcategory') {
        if (draggedElement.dataset.parentId !== targetRow.dataset.parentId) return false;
    } else if (draggedType === 'task') {
        if (draggedElement.dataset.parentSubcategoryId !== targetRow.dataset.parentSubcategoryId) return false;
    }

    // 순서 변경 수행
    reorderItems(draggedElement, targetRow, dropPosition);

    return false;
}

// 드래그 종료
function handleDragEnd(e) {
    e.currentTarget.classList.remove('dragging');

    // 모든 인디케이터 제거
    removeAllDropIndicators();

    draggedElement = null;
    dropPosition = null;
}

// 아이템 순서 변경
function reorderItems(draggedRow, targetRow, position) {
    const draggedId = draggedRow.dataset.id;
    const targetId = targetRow.dataset.id;
    const type = draggedRow.dataset.type;

    if (type === 'category') {
        // 카테고리 순서 변경
        const draggedIndex = adminState.data.categories.findIndex(cat => cat.id === draggedId);
        const targetIndex = adminState.data.categories.findIndex(cat => cat.id === targetId);

        if (draggedIndex === -1 || targetIndex === -1) return;

        // 배열에서 제거
        const [removed] = adminState.data.categories.splice(draggedIndex, 1);

        // 새 위치 계산
        let newIndex = targetIndex;
        if (draggedIndex < targetIndex) {
            // 아래로 이동한 경우
            newIndex = position === 'after' ? targetIndex : targetIndex - 1;
        } else {
            // 위로 이동한 경우
            newIndex = position === 'after' ? targetIndex + 1 : targetIndex;
        }

        // 새 위치에 삽입
        adminState.data.categories.splice(newIndex, 0, removed);

    } else if (type === 'subcategory') {
        // 서브카테고리 순서 변경
        const categoryId = draggedRow.dataset.parentId;
        const category = adminState.data.categories.find(cat => cat.id === categoryId);

        if (!category) return;

        const draggedIndex = category.subcategories.findIndex(sub => sub.id === draggedId);
        const targetIndex = category.subcategories.findIndex(sub => sub.id === targetId);

        if (draggedIndex === -1 || targetIndex === -1) return;

        // 배열에서 제거
        const [removed] = category.subcategories.splice(draggedIndex, 1);

        // 새 위치 계산
        let newIndex = targetIndex;
        if (draggedIndex < targetIndex) {
            newIndex = position === 'after' ? targetIndex : targetIndex - 1;
        } else {
            newIndex = position === 'after' ? targetIndex + 1 : targetIndex;
        }

        // 새 위치에 삽입
        category.subcategories.splice(newIndex, 0, removed);

    } else if (type === 'task') {
        // 태스크 순서 변경
        const categoryId = draggedRow.dataset.parentCategoryId;
        const subcategoryId = draggedRow.dataset.parentSubcategoryId;

        const category = adminState.data.categories.find(cat => cat.id === categoryId);
        if (!category) return;

        const subcategory = category.subcategories.find(sub => sub.id === subcategoryId);
        if (!subcategory) return;

        const draggedIndex = subcategory.tasks.findIndex(task => task.id === draggedId);
        const targetIndex = subcategory.tasks.findIndex(task => task.id === targetId);

        if (draggedIndex === -1 || targetIndex === -1) return;

        // 배열에서 제거
        const [removed] = subcategory.tasks.splice(draggedIndex, 1);

        // 새 위치 계산
        let newIndex = targetIndex;
        if (draggedIndex < targetIndex) {
            newIndex = position === 'after' ? targetIndex : targetIndex - 1;
        } else {
            newIndex = position === 'after' ? targetIndex + 1 : targetIndex;
        }

        // 새 위치에 삽입
        subcategory.tasks.splice(newIndex, 0, removed);
    }

    // 데이터 저장 (saveData()는 내부적으로 renderUnifiedTree()를 호출함)
    if (saveData()) {
        // 저장 성공 후 확장 상태 유지하면서 다시 렌더링
        expandAll();
    }
}

// 전체 펼치기
// 전체 펼치기/접기 토글
function toggleAll() {
    if (adminState.isAllExpanded) {
        // 현재 펼쳐져 있으면 접기
        elements.treeContainer.querySelectorAll('.tree-row').forEach(row => {
            row.classList.remove('expanded');
        });
        adminState.isAllExpanded = false;
        elements.toggleIcon.textContent = '⊕';
        elements.toggleText.textContent = '전체 펼치기';
    } else {
        // 현재 접혀 있으면 펼치기
        elements.treeContainer.querySelectorAll('.tree-row').forEach(row => {
            row.classList.add('expanded');
        });
        adminState.isAllExpanded = true;
        elements.toggleIcon.textContent = '⊖';
        elements.toggleText.textContent = '전체 접기';
    }
}

function expandAll() {
    elements.treeContainer.querySelectorAll('.tree-row').forEach(row => {
        row.classList.add('expanded');
    });
    adminState.isAllExpanded = true;
    elements.toggleIcon.textContent = '⊖';
    elements.toggleText.textContent = '전체 접기';
}

// 추가 버튼 핸들러
window.handleAddSubcategory = function(categoryId, event) {
    event.stopPropagation();
    adminState.selectedCategory = categoryId;
    showCreateModal('subcategory');
};

window.handleAddTask = function(categoryId, subcategoryId, event) {
    event.stopPropagation();
    adminState.selectedCategory = categoryId;
    adminState.selectedSubcategory = subcategoryId;
    showCreateModal('task');
};

// ===== CRUD 연산 - Category =====
window.editCategory = function(categoryId) {
    const category = adminState.data.categories.find(cat => cat.id === categoryId);
    if (category) {
        showEditModal('category', category);
    }
};

window.deleteCategory = function(categoryId) {
    const category = adminState.data.categories.find(cat => cat.id === categoryId);
    if (!category) return;

    const childCount = window.DataManager.countCategoryChildren(category);

    if (childCount.total > 0) {
        showConfirmDialog(
            '삭제 확인',
            `이 핵심지표에는 ${childCount.subcategories}개의 대분류와 ${childCount.tasks}개의 과제가 있습니다. 모두 삭제하시겠습니까?`,
            () => {
                performDeleteCategory(categoryId);
            }
        );
    } else {
        showConfirmDialog(
            '삭제 확인',
            '정말 삭제하시겠습니까?',
            () => {
                performDeleteCategory(categoryId);
            }
        );
    }
};

function performDeleteCategory(categoryId) {
    adminState.data.categories = adminState.data.categories.filter(cat => cat.id !== categoryId);
    saveData();
}

function createCategory(formData) {
    const newId = window.DataManager.generateCategoryId(adminState.data.categories);

    const newCategory = {
        id: newId,
        type: formData.type,
        title: formData.title,
        metrics: {
            current: formData.current,
            unit: formData.unit,
            target: formData.target,
            achievement: formData.achievement + '%'
        },
        subcategories: []
    };

    adminState.data.categories.push(newCategory);
    saveData();
}

function updateCategory(categoryId, formData) {
    const category = adminState.data.categories.find(cat => cat.id === categoryId);
    if (!category) return;

    category.type = formData.type;
    category.title = formData.title;
    category.metrics.current = formData.current;
    category.metrics.unit = formData.unit;
    category.metrics.target = formData.target;
    category.metrics.achievement = formData.achievement + '%';

    saveData();
}

// ===== CRUD 연산 - Subcategory =====
window.editSubcategory = function(categoryId, subcategoryId) {
    const category = adminState.data.categories.find(cat => cat.id === categoryId);
    if (!category) return;

    const subcategory = category.subcategories.find(sub => sub.id === subcategoryId);
    if (subcategory) {
        showEditModal('subcategory', subcategory, categoryId);
    }
};

window.deleteSubcategory = function(categoryId, subcategoryId) {
    const category = adminState.data.categories.find(cat => cat.id === categoryId);
    if (!category) return;

    const subcategory = category.subcategories.find(sub => sub.id === subcategoryId);
    if (!subcategory) return;

    const taskCount = subcategory.tasks ? subcategory.tasks.length : 0;

    if (taskCount > 0) {
        showConfirmDialog(
            '삭제 확인',
            `이 대분류에는 ${taskCount}개의 과제가 있습니다. 모두 삭제하시겠습니까?`,
            () => {
                performDeleteSubcategory(categoryId, subcategoryId);
            }
        );
    } else {
        showConfirmDialog(
            '삭제 확인',
            '정말 삭제하시겠습니까?',
            () => {
                performDeleteSubcategory(categoryId, subcategoryId);
            }
        );
    }
};

function performDeleteSubcategory(categoryId, subcategoryId) {
    const category = adminState.data.categories.find(cat => cat.id === categoryId);
    if (!category) return;

    category.subcategories = category.subcategories.filter(sub => sub.id !== subcategoryId);
    saveData();
}

function createSubcategory(formData) {
    const categoryId = formData.parentCategoryId || adminState.selectedCategory;
    const category = adminState.data.categories.find(cat => cat.id === categoryId);
    if (!category) return;

    const newId = window.DataManager.generateSubcategoryId(categoryId, category.subcategories);

    const newSubcategory = {
        id: newId,
        title: formData.title,
        tasks: []
    };

    category.subcategories.push(newSubcategory);
    saveData();
}

function updateSubcategory(subcategoryId, formData) {
    const newCategoryId = formData.parentCategoryId;
    let category = null;
    let subcategory = null;

    // 기존 subcategory 찾기
    for (const cat of adminState.data.categories) {
        const sub = cat.subcategories.find(s => s.id === subcategoryId);
        if (sub) {
            category = cat;
            subcategory = sub;
            break;
        }
    }

    if (!subcategory) return;

    // 카테고리 변경이 필요한 경우
    if (newCategoryId && newCategoryId !== category.id) {
        const newCategory = adminState.data.categories.find(cat => cat.id === newCategoryId);
        if (newCategory) {
            // 기존 위치에서 제거
            category.subcategories = category.subcategories.filter(s => s.id !== subcategoryId);
            // 새 위치에 추가
            subcategory.title = formData.title;
            newCategory.subcategories.push(subcategory);
        }
    } else {
        // 같은 카테고리 내에서 수정
        subcategory.title = formData.title;
    }

    saveData();
}

// ===== CRUD 연산 - Task =====
window.editTask = function(taskId) {
    const task = findTaskById(taskId);
    if (task) {
        showEditModal('task', task);
    }
};

window.deleteTask = function(taskId) {
    showConfirmDialog(
        '삭제 확인',
        '정말 삭제하시겠습니까?',
        () => {
            performDeleteTask(taskId);
        }
    );
};

function performDeleteTask(taskId) {
    for (const category of adminState.data.categories) {
        for (const subcategory of category.subcategories) {
            const taskIndex = subcategory.tasks.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                subcategory.tasks.splice(taskIndex, 1);
                saveData();
                return;
            }
        }
    }
}

function createTask(formData) {
    const categoryId = formData.parentCategoryId || adminState.selectedCategory;
    const subcategoryId = formData.parentSubcategoryId || adminState.selectedSubcategory;

    const category = adminState.data.categories.find(cat => cat.id === categoryId);
    if (!category) return;

    const subcategory = category.subcategories.find(sub => sub.id === subcategoryId);
    if (!subcategory) return;

    const newId = window.DataManager.generateTaskId(categoryId, subcategoryId, subcategory.tasks);

    const newTask = {
        id: newId,
        title: formData.title,
        overview: formData.overview,
        organization: formData.organization,
        metrics: {
            current: formData.current,
            unit: formData.unit,
            target: formData.target,
            achievement: formData.achievement + '%'
        }
    };

    subcategory.tasks.push(newTask);
    saveData();
}

function updateTask(taskId, formData) {
    const newCategoryId = formData.parentCategoryId;
    const newSubcategoryId = formData.parentSubcategoryId;
    let task = null;
    let oldCategory = null;
    let oldSubcategory = null;

    // 기존 task 찾기
    for (const category of adminState.data.categories) {
        for (const subcategory of category.subcategories) {
            const t = subcategory.tasks.find(task => task.id === taskId);
            if (t) {
                task = t;
                oldCategory = category;
                oldSubcategory = subcategory;
                break;
            }
        }
        if (task) break;
    }

    if (!task) return;

    // 위치 변경이 필요한 경우
    if ((newCategoryId && newCategoryId !== oldCategory.id) ||
        (newSubcategoryId && newSubcategoryId !== oldSubcategory.id)) {
        const newCategory = adminState.data.categories.find(cat => cat.id === newCategoryId);
        if (newCategory) {
            const newSubcategory = newCategory.subcategories.find(sub => sub.id === newSubcategoryId);
            if (newSubcategory) {
                // 기존 위치에서 제거
                oldSubcategory.tasks = oldSubcategory.tasks.filter(t => t.id !== taskId);

                // 데이터 업데이트
                task.title = formData.title;
                task.overview = formData.overview;
                task.organization = formData.organization;
                task.metrics = {
                    current: formData.current,
                    unit: formData.unit,
                    target: formData.target,
                    achievement: formData.achievement + '%'
                };

                // 새 위치에 추가
                newSubcategory.tasks.push(task);
            }
        }
    } else {
        // 같은 위치에서 수정
        task.title = formData.title;
        task.overview = formData.overview;
        task.organization = formData.organization;
        task.metrics = {
            current: formData.current,
            unit: formData.unit,
            target: formData.target,
            achievement: formData.achievement + '%'
        };
    }

    saveData();
}

// ===== 모달 관리 =====
function showCreateModal(type) {
    adminState.currentAction = 'create';
    adminState.currentEntity = null;

    let title = '';
    if (type === 'category') title = '새 핵심지표 만들기';
    else if (type === 'subcategory') title = '새 대분류 만들기';
    else if (type === 'task') title = '새 과제 만들기';

    elements.modalTitle.textContent = title;
    renderForm(type, null);
    updateModalFooterForCreate(); // 생성용 footer (삭제 버튼 없음)
    elements.modalOverlay.classList.add('active');
}

function showEditModal(type, entity, parentId = null) {
    adminState.currentAction = 'edit';
    adminState.currentEntity = entity;

    let title = '';
    if (type === 'category') title = '핵심지표 편집';
    else if (type === 'subcategory') title = '대분류 편집';
    else if (type === 'task') title = '과제 편집';

    elements.modalTitle.textContent = title;
    renderForm(type, entity, parentId);

    // Task 편집 시 이동/복사/삭제 버튼 추가
    if (type === 'task') {
        updateModalFooterForTask();
    } else {
        // Category/Subcategory 편집 시 삭제 버튼 추가
        updateModalFooterDefault(type);
    }

    elements.modalOverlay.classList.add('active');
}

function closeModal() {
    elements.modalOverlay.classList.remove('active');
    adminState.currentAction = null;
    adminState.currentEntity = null;
}

function renderForm(type, entity, parentId = null) {
    let html = '';

    if (type === 'category') {
        html = `
            <div class="form-group">
                <label class="form-label required">유형</label>
                <select class="form-select" name="type" required>
                    <option value="core" ${!entity || entity.type === 'core' ? 'selected' : ''}>핵심지표</option>
                    <option value="basic" ${entity && entity.type === 'basic' ? 'selected' : ''}>기본기 지표</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label required">제목</label>
                <input type="text" class="form-input" name="title" value="${entity ? entity.title : ''}" required minlength="3" maxlength="200">
                <div class="form-help">3-200자</div>
            </div>
            <div class="form-group">
                <label class="form-label required">현재 실적</label>
                <input type="text" class="form-input" name="current" value="${entity ? entity.metrics.current : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label required">단위</label>
                <input type="text" class="form-input" name="unit" value="${entity ? entity.metrics.unit : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label required">목표</label>
                <input type="text" class="form-input" name="target" value="${entity ? entity.metrics.target : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label required">달성률 (%)</label>
                <input type="number" class="form-input" name="achievement" value="${entity ? parseFloat(entity.metrics.achievement) : ''}" required min="0" max="100" step="0.1">
                <div class="form-help">0-100</div>
            </div>
        `;
    } else if (type === 'subcategory') {
        const categories = adminState.data.categories;
        const currentCategoryId = parentId || adminState.selectedCategory || (entity ? findCategoryIdBySubcategory(entity.id) : null);

        html = `
            <div class="form-group">
                <label class="form-label required">상위 카테고리</label>
                <select class="form-select" name="parentCategoryId" required>
                    ${categories.map(cat => `
                        <option value="${cat.id}" ${cat.id === currentCategoryId ? 'selected' : ''}>${cat.title}</option>
                    `).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label required">제목</label>
                <textarea class="form-textarea" name="title" required minlength="3" maxlength="500">${entity ? entity.title : ''}</textarea>
                <div class="form-help">3-500자</div>
            </div>
        `;
    } else if (type === 'task') {
        const categories = adminState.data.categories;
        let currentCategoryId = adminState.selectedCategory;
        let currentSubcategoryId = adminState.selectedSubcategory;

        if (entity) {
            const location = findTaskLocation(entity.id);
            if (location) {
                currentCategoryId = location.categoryId;
                currentSubcategoryId = location.subcategoryId;
            }
        }

        const currentCategory = categories.find(cat => cat.id === currentCategoryId);

        html = `
            <div class="form-group">
                <label class="form-label required">상위 카테고리</label>
                <select class="form-select" name="parentCategoryId" id="taskParentCategory" required>
                    ${categories.map(cat => `
                        <option value="${cat.id}" ${cat.id === currentCategoryId ? 'selected' : ''}>${cat.title}</option>
                    `).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label required">상위 대분류</label>
                <select class="form-select" name="parentSubcategoryId" id="taskParentSubcategory" required>
                    ${currentCategory ? currentCategory.subcategories.map(sub => `
                        <option value="${sub.id}" ${sub.id === currentSubcategoryId ? 'selected' : ''}>${sub.title}</option>
                    `).join('') : ''}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label required">제목</label>
                <input type="text" class="form-input" name="title" value="${entity ? entity.title : ''}" required minlength="3" maxlength="200">
                <div class="form-help">3-200자</div>
            </div>
            <div class="form-group">
                <label class="form-label required">개요</label>
                <textarea class="form-textarea" name="overview" required minlength="10" maxlength="1000">${entity ? entity.overview : ''}</textarea>
                <div class="form-help">10-1000자</div>
            </div>
            <div class="form-group">
                <label class="form-label required">담당 조직</label>
                <select class="form-select" name="organization" required>
                    ${adminState.validOrganizations.map(org => `
                        <option value="${org}" ${entity && entity.organization === org ? 'selected' : ''}>${org}</option>
                    `).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label required">현재 실적</label>
                <input type="text" class="form-input" name="current" value="${entity ? entity.metrics.current : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label required">단위</label>
                <input type="text" class="form-input" name="unit" value="${entity ? entity.metrics.unit : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label required">목표</label>
                <input type="text" class="form-input" name="target" value="${entity ? entity.metrics.target : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label required">달성률 (%)</label>
                <input type="number" class="form-input" name="achievement" value="${entity ? parseFloat(entity.metrics.achievement) : ''}" required min="0" max="100" step="0.1">
                <div class="form-help">0-100</div>
            </div>
        `;
    }

    elements.modalForm.innerHTML = html;

    // Cascading dropdown for task form
    if (type === 'task') {
        const categorySelect = document.getElementById('taskParentCategory');
        const subcategorySelect = document.getElementById('taskParentSubcategory');

        categorySelect.addEventListener('change', () => {
            const selectedCategoryId = categorySelect.value;
            const selectedCategory = adminState.data.categories.find(cat => cat.id === selectedCategoryId);

            if (selectedCategory) {
                subcategorySelect.innerHTML = selectedCategory.subcategories.map(sub => `
                    <option value="${sub.id}">${sub.title}</option>
                `).join('');
            }
        });
    }
}

function handleFormSubmit() {
    const formData = new FormData(elements.modalForm);
    const data = Object.fromEntries(formData.entries());

    // 유효성 검증
    if (!elements.modalForm.checkValidity()) {
        elements.modalForm.reportValidity();
        return;
    }

    let type = '';
    if (adminState.currentView === 'categories' || (adminState.currentEntity && adminState.currentEntity.type)) {
        type = 'category';
    } else if (adminState.currentView === 'subcategories' || (adminState.currentEntity && adminState.currentEntity.id && adminState.currentEntity.id.startsWith('sub'))) {
        type = 'subcategory';
    } else if (adminState.currentView === 'tasks' || (adminState.currentEntity && adminState.currentEntity.id && adminState.currentEntity.id.startsWith('task'))) {
        type = 'task';
    }

    if (adminState.currentAction === 'create') {
        if (type === 'category') {
            createCategory(data);
        } else if (type === 'subcategory') {
            createSubcategory(data);
        } else if (type === 'task') {
            createTask(data);
        }
    } else if (adminState.currentAction === 'edit') {
        if (type === 'category') {
            updateCategory(adminState.currentEntity.id, data);
        } else if (type === 'subcategory') {
            updateSubcategory(adminState.currentEntity.id, data);
        } else if (type === 'task') {
            updateTask(adminState.currentEntity.id, data);
        }
    }

    closeModal();
}

// ===== 헬퍼 함수 =====
function findTaskById(taskId) {
    for (const category of adminState.data.categories) {
        for (const subcategory of category.subcategories) {
            const task = subcategory.tasks.find(t => t.id === taskId);
            if (task) return task;
        }
    }
    return null;
}

function findTaskLocation(taskId) {
    for (const category of adminState.data.categories) {
        for (const subcategory of category.subcategories) {
            const task = subcategory.tasks.find(t => t.id === taskId);
            if (task) {
                return {
                    categoryId: category.id,
                    subcategoryId: subcategory.id
                };
            }
        }
    }
    return null;
}

function findCategoryIdBySubcategory(subcategoryId) {
    for (const category of adminState.data.categories) {
        if (category.subcategories.find(sub => sub.id === subcategoryId)) {
            return category.id;
        }
    }
    return null;
}

// ===== 백업 관리 =====
function handleBackup() {
    elements.backupModalOverlay.classList.add('active');
    renderBackupList();
}

function renderBackupList() {
    const backups = window.DataManager.getBackups();

    if (backups.length === 0) {
        elements.backupList.innerHTML = '<div class="empty-backup">백업이 없습니다</div>';
        return;
    }

    const html = backups.map((backup, index) => {
        const date = new Date(backup.timestamp);
        const dateStr = date.toLocaleDateString('ko-KR');
        const timeStr = date.toLocaleTimeString('ko-KR');

        return `
            <div class="backup-item">
                <div class="backup-info-text">
                    <div class="backup-date">${dateStr}</div>
                    <div class="backup-time">${timeStr}</div>
                </div>
                <div class="backup-actions">
                    <button class="backup-button" onclick="restoreBackupAtIndex(${index})">복원</button>
                </div>
            </div>
        `;
    }).join('');

    elements.backupList.innerHTML = html;
}

window.restoreBackupAtIndex = function(index) {
    showConfirmDialog(
        '백업 복원',
        '현재 데이터가 백업으로 교체됩니다. 계속하시겠습니까?',
        () => {
            const success = window.DataManager.restoreBackup(index);
            if (success) {
                showToast('백업을 복원했습니다', 'success');
                elements.backupModalOverlay.classList.remove('active');
                loadData();
                renderUnifiedTree();
            } else {
                showToast('백업 복원 실패', 'error');
            }
        }
    );
};

// ===== Confirm Dialog =====
function showConfirmDialog(title, message, onConfirm) {
    elements.confirmTitle.textContent = title;
    elements.confirmMessage.textContent = message;
    elements.confirmDialog.classList.add('active');

    const handleConfirm = () => {
        onConfirm();
        elements.confirmDialog.classList.remove('active');
        cleanup();
    };

    const handleCancel = () => {
        elements.confirmDialog.classList.remove('active');
        cleanup();
    };

    const cleanup = () => {
        elements.confirmOkButton.removeEventListener('click', handleConfirm);
        elements.confirmCancelButton.removeEventListener('click', handleCancel);
    };

    elements.confirmOkButton.addEventListener('click', handleConfirm);
    elements.confirmCancelButton.addEventListener('click', handleCancel);
}

// ===== Toast 알림 =====
function showToast(message, type = 'success') {
    elements.toast.textContent = message;
    elements.toast.className = 'toast ' + type;
    elements.toast.classList.add('show');

    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, type === 'error' ? 5000 : 3000);
}

// ===== 이벤트 리스너 설정 =====
function setupEventListeners() {
    // Header buttons
    elements.syncAllButton.addEventListener('click', syncAllTasks);
    elements.backupButton.addEventListener('click', handleBackup);
    elements.dashboardButton.addEventListener('click', () => {
        window.open('index.html', '_blank');
    });

    // Toggle All button
    elements.toggleAllButton.addEventListener('click', toggleAll);

    // Add button
    elements.addButton.addEventListener('click', () => {
        showCreateModal('category');
    });

    // Modal buttons
    elements.submitButton.addEventListener('click', handleFormSubmit);
    elements.cancelButton.addEventListener('click', closeModal);
    elements.closeModalButton.addEventListener('click', closeModal);

    // Backup modal
    elements.closeBackupModalButton.addEventListener('click', () => {
        elements.backupModalOverlay.classList.remove('active');
    });
    elements.closeBackupButton.addEventListener('click', () => {
        elements.backupModalOverlay.classList.remove('active');
    });

    // Close modals on overlay click
    elements.modalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.modalOverlay) {
            closeModal();
        }
    });
    elements.backupModalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.backupModalOverlay) {
            elements.backupModalOverlay.classList.remove('active');
        }
    });
    elements.confirmDialog.addEventListener('click', (e) => {
        if (e.target === elements.confirmDialog) {
            elements.confirmDialog.classList.remove('active');
        }
    });
}

// ===== Task 이동/복사 기능 =====

// Modal Footer 업데이트 (Task 편집용)
function updateModalFooterForTask() {
    const modalFooter = document.querySelector('#modalOverlay .modal-footer');
    modalFooter.innerHTML = `
        <button type="button" id="moveTaskButton" class="button secondary">이동</button>
        <button type="button" id="copyTaskButton" class="button secondary">복사</button>
        <button type="button" id="deleteTaskButton" class="button danger">삭제</button>
        <button type="button" id="cancelButton" class="button secondary">취소</button>
        <button type="button" id="submitButton" class="button primary">저장</button>
    `;

    // 이벤트 리스너 재설정
    document.getElementById('moveTaskButton').addEventListener('click', showMoveTaskModal);
    document.getElementById('copyTaskButton').addEventListener('click', showCopyTaskModal);
    document.getElementById('deleteTaskButton').addEventListener('click', () => {
        if (adminState.currentEntity) {
            deleteTask(adminState.currentEntity.id);
        }
    });
    document.getElementById('cancelButton').addEventListener('click', closeModal);
    document.getElementById('submitButton').addEventListener('click', handleFormSubmit);
}

// Modal Footer 업데이트 (기본)
function updateModalFooterDefault(type) {
    const modalFooter = document.querySelector('#modalOverlay .modal-footer');
    modalFooter.innerHTML = `
        <button type="button" id="deleteButton" class="button danger">삭제</button>
        <button type="button" id="cancelButton" class="button secondary">취소</button>
        <button type="button" id="submitButton" class="button primary">저장</button>
    `;

    // 이벤트 리스너 재설정
    document.getElementById('deleteButton').addEventListener('click', () => {
        if (adminState.currentEntity) {
            if (type === 'category') {
                deleteCategory(adminState.currentEntity.id);
            } else if (type === 'subcategory') {
                deleteSubcategory(null, adminState.currentEntity.id);
            }
        }
    });
    document.getElementById('cancelButton').addEventListener('click', closeModal);
    document.getElementById('submitButton').addEventListener('click', handleFormSubmit);
}

// Modal Footer 업데이트 (생성용 - 삭제 버튼 없음)
function updateModalFooterForCreate() {
    const modalFooter = document.querySelector('#modalOverlay .modal-footer');
    modalFooter.innerHTML = `
        <button type="button" id="cancelButton" class="button secondary">취소</button>
        <button type="button" id="submitButton" class="button primary">저장</button>
    `;

    // 이벤트 리스너 재설정
    document.getElementById('cancelButton').addEventListener('click', closeModal);
    document.getElementById('submitButton').addEventListener('click', handleFormSubmit);
}

// 이동 모달 표시
function showMoveTaskModal() {
    if (!adminState.currentEntity) return;

    // 중분류 선택 모달 생성 및 표시
    showSubcategoryPicker('move');
}

// 복사 모달 표시
function showCopyTaskModal() {
    if (!adminState.currentEntity) return;

    // 중분류 선택 모달 생성 및 표시
    showSubcategoryPicker('copy');
}

// 중분류 선택 모달 표시
function showSubcategoryPicker(action) {
    const task = adminState.currentEntity;
    const currentLocation = findTaskLocation(task.id);

    // 모달 생성
    const pickerModal = document.createElement('div');
    pickerModal.id = 'subcategoryPickerModal';
    pickerModal.className = 'modal-overlay active';
    pickerModal.style.zIndex = '1100'; // 기존 모달 위에 표시

    const treeHtml = renderSubcategoryTreePicker(currentLocation);

    pickerModal.innerHTML = `
        <div class="modal-content medium">
            <div class="modal-header">
                <h3>${action === 'move' ? '이동할 중분류 선택' : '복사할 중분류 선택'}</h3>
                <button class="close-button" onclick="closeSubcategoryPicker()">&times;</button>
            </div>
            <div class="modal-body">
                <div id="subcategoryTree" style="max-height: 400px; overflow-y: auto;">
                    ${treeHtml}
                </div>
            </div>
            <div class="modal-footer">
                <button class="button secondary" onclick="closeSubcategoryPicker()">취소</button>
                <button class="button primary" onclick="confirmSubcategorySelection('${action}')">확인</button>
            </div>
        </div>
    `;

    document.body.appendChild(pickerModal);

    // 트리 클릭 이벤트 설정
    setupSubcategoryTreeEvents();
}

// 중분류 트리 렌더링
function renderSubcategoryTreePicker(currentLocation) {
    const categories = adminState.data.categories;

    let html = '<div class="subcategory-tree">';

    categories.forEach(category => {
        html += `
            <div class="tree-category" data-category-id="${category.id}">
                <div class="tree-category-header" onclick="toggleTreeCategory('${category.id}')">
                    <span class="tree-toggle">▸</span>
                    <span class="tree-category-title">${category.title}</span>
                </div>
                <div class="tree-category-children" style="display: none;">
        `;

        if (category.subcategories && category.subcategories.length > 0) {
            category.subcategories.forEach(subcategory => {
                const isCurrent = currentLocation &&
                    currentLocation.categoryId === category.id &&
                    currentLocation.subcategoryId === subcategory.id;

                html += `
                    <div class="tree-subcategory ${isCurrent ? 'current' : ''}"
                         data-category-id="${category.id}"
                         data-subcategory-id="${subcategory.id}">
                        <span class="tree-subcategory-title">${subcategory.title}</span>
                        ${isCurrent ? '<span class="current-badge">(현재 위치)</span>' : ''}
                    </div>
                `;
            });
        }

        html += `
                </div>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

// 트리 카테고리 토글
window.toggleTreeCategory = function(categoryId) {
    const categoryDiv = document.querySelector(`.tree-category[data-category-id="${categoryId}"]`);
    if (!categoryDiv) return;

    const toggle = categoryDiv.querySelector('.tree-toggle');
    const children = categoryDiv.querySelector('.tree-category-children');

    if (children.style.display === 'none') {
        children.style.display = 'block';
        toggle.textContent = '▾';
    } else {
        children.style.display = 'none';
        toggle.textContent = '▸';
    }
};

// 트리 이벤트 설정
function setupSubcategoryTreeEvents() {
    const subcategories = document.querySelectorAll('.tree-subcategory:not(.current)');

    subcategories.forEach(sub => {
        sub.addEventListener('click', () => {
            // 기존 선택 제거
            document.querySelectorAll('.tree-subcategory').forEach(s => {
                s.classList.remove('selected');
            });
            // 새로운 선택
            sub.classList.add('selected');
        });
    });
}

// 중분류 선택 확인
window.confirmSubcategorySelection = function(action) {
    const selected = document.querySelector('.tree-subcategory.selected');

    if (!selected) {
        showToast('중분류를 선택해주세요', 'warning');
        return;
    }

    const targetCategoryId = selected.dataset.categoryId;
    const targetSubcategoryId = selected.dataset.subcategoryId;

    // 확인 다이얼로그 표시
    const actionText = action === 'move' ? '이동' : '복사';
    const category = adminState.data.categories.find(c => c.id === targetCategoryId);
    const subcategory = category?.subcategories.find(s => s.id === targetSubcategoryId);

    showConfirmDialog(
        `과제 ${actionText}`,
        `"${subcategory.title}" 중분류로 과제를 ${actionText}하시겠습니까?`,
        () => {
            if (action === 'move') {
                performMoveTask(targetCategoryId, targetSubcategoryId);
            } else {
                performCopyTask(targetCategoryId, targetSubcategoryId);
            }
            closeSubcategoryPicker();
        }
    );
};

// 중분류 선택 모달 닫기
window.closeSubcategoryPicker = function() {
    const picker = document.getElementById('subcategoryPickerModal');
    if (picker) {
        picker.remove();
    }
};

// 실제 이동 수행
function performMoveTask(targetCategoryId, targetSubcategoryId) {
    const task = adminState.currentEntity;
    const currentLocation = findTaskLocation(task.id);

    if (!currentLocation) {
        showToast('과제를 찾을 수 없습니다', 'error');
        return;
    }

    // 현재 위치에서 제거
    const currentCategory = adminState.data.categories.find(c => c.id === currentLocation.categoryId);
    const currentSubcategory = currentCategory?.subcategories.find(s => s.id === currentLocation.subcategoryId);

    if (currentSubcategory) {
        currentSubcategory.tasks = currentSubcategory.tasks.filter(t => t.id !== task.id);
    }

    // 새 위치에 추가
    const targetCategory = adminState.data.categories.find(c => c.id === targetCategoryId);
    const targetSubcategory = targetCategory?.subcategories.find(s => s.id === targetSubcategoryId);

    if (targetSubcategory) {
        if (!targetSubcategory.tasks) {
            targetSubcategory.tasks = [];
        }
        targetSubcategory.tasks.push(task);
    }

    // 저장
    if (saveData()) {
        showToast('과제가 이동되었습니다', 'success');
        closeModal();
    }
}

// 실제 복사 수행
function performCopyTask(targetCategoryId, targetSubcategoryId) {
    const task = adminState.currentEntity;

    // 새로운 ID 생성
    const newTaskId = window.DataManager.generateTaskId(targetCategoryId, targetSubcategoryId);

    // Task 복사
    const newTask = {
        ...task,
        id: newTaskId
    };

    // 대상 중분류에 추가
    const targetCategory = adminState.data.categories.find(c => c.id === targetCategoryId);
    const targetSubcategory = targetCategory?.subcategories.find(s => s.id === targetSubcategoryId);

    if (targetSubcategory) {
        if (!targetSubcategory.tasks) {
            targetSubcategory.tasks = [];
        }
        targetSubcategory.tasks.push(newTask);
    }

    // taskDetails도 복사
    if (adminState.data.taskDetails && adminState.data.taskDetails[task.id]) {
        adminState.data.taskDetails[newTaskId] = {
            ...adminState.data.taskDetails[task.id]
        };
    }

    // 저장
    if (saveData()) {
        showToast('과제가 복사되었습니다', 'success');
        closeModal();
    }
}

// ===== 원천 시스템 연동 기능 =====

// 개별 과제 데이터 불러오기
function syncTask(taskId) {
    const task = findTaskById(taskId);
    if (!task) {
        showToast('과제를 찾을 수 없습니다', 'error');
        return;
    }

    // 확인 다이얼로그
    const confirmMsg = `"${task.title}" 과제의 데이터를 원천 시스템에서 불러오시겠습니까?\n\n현재 데이터가 업데이트됩니다.`;

    if (confirm(confirmMsg)) {
        // 원천 시스템 연동 시뮬레이션 (실제로는 API 호출)
        simulateSyncTask(task);

        // 저장 및 화면 갱신
        adminState.data.lastModified = new Date().toISOString();
        if (window.DataManager.saveDashboardData(adminState.data)) {
            showToast(`"${task.title}" 데이터를 업데이트했습니다`, 'success');
            renderUnifiedTree();
        }
    }
}

// 전체 과제 데이터 불러오기
function syncAllTasks() {
    const totalTasks = countAllTasks();

    if (totalTasks === 0) {
        showToast('불러올 과제가 없습니다', 'warning');
        return;
    }

    const confirmMsg = `전체 ${totalTasks}개 과제의 데이터를 원천 시스템에서 불러오시겠습니까?\n\n모든 과제의 현재 데이터가 업데이트됩니다.`;

    if (confirm(confirmMsg)) {
        // 전체 과제 동기화
        let syncedCount = 0;

        adminState.data.categories.forEach(category => {
            category.subcategories.forEach(subcategory => {
                if (subcategory.tasks) {
                    subcategory.tasks.forEach(task => {
                        simulateSyncTask(task);
                        syncedCount++;
                    });
                }
            });
        });

        // 저장
        adminState.data.lastModified = new Date().toISOString();
        if (window.DataManager.saveDashboardData(adminState.data)) {
            showToast(`전체 ${syncedCount}개 과제 데이터를 업데이트했습니다`, 'success');
            renderUnifiedTree();
        }
    }
}

// 원천 시스템 연동 시뮬레이션
function simulateSyncTask(task) {
    // 실제 구현 시에는 여기서 API를 호출합니다
    // 예: fetch('/api/sync/task/' + task.id)

    // 시뮬레이션: 랜덤 데이터 생성
    const currentValue = Math.floor(Math.random() * 100) + 50;
    const targetValue = Math.floor(Math.random() * 50) + 100;
    const achievement = Math.round((currentValue / targetValue) * 100);

    // 데이터 업데이트
    task.metrics.current = currentValue.toString();
    task.metrics.target = targetValue.toString();
    task.metrics.achievement = achievement + '%';

    console.log(`[동기화] ${task.title}: ${task.metrics.current}/${task.metrics.target} (${task.metrics.achievement})`);
}

// 전체 과제 수 계산
function countAllTasks() {
    let count = 0;
    adminState.data.categories.forEach(category => {
        category.subcategories.forEach(subcategory => {
            if (subcategory.tasks) {
                count += subcategory.tasks.length;
            }
        });
    });
    return count;
}

// ID로 과제 찾기
function findTaskById(taskId) {
    for (const category of adminState.data.categories) {
        for (const subcategory of category.subcategories) {
            if (subcategory.tasks) {
                const task = subcategory.tasks.find(t => t.id === taskId);
                if (task) return task;
            }
        }
    }
    return null;
}

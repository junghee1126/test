// data-manager.js
// localStorage 기반 데이터 관리 모듈

const STORAGE_KEY = 'mno_dashboard_data';
const BACKUP_KEY = 'mno_dashboard_backup';
const MAX_BACKUPS = 5;

/**
 * localStorage에서 대시보드 데이터 가져오기
 */
function getDashboardData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (error) {
        console.error('데이터 로드 실패:', error);
    }
    return null;
}

/**
 * localStorage에 대시보드 데이터 저장
 */
function saveDashboardData(data) {
    try {
        // 데이터 유효성 검증
        if (!validateDashboardData(data)) {
            throw new Error('데이터 유효성 검증 실패');
        }

        // 버전 및 타임스탬프 추가
        const dataToSave = {
            version: "1.0.0",
            lastModified: new Date().toISOString(),
            categories: data.categories || [],
            taskDetails: data.taskDetails || {}
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));

        // 자동 백업 생성
        createAutoBackup(dataToSave);

        return true;
    } catch (error) {
        console.error('데이터 저장 실패:', error);
        return false;
    }
}

/**
 * 대시보드 데이터 유효성 검증
 */
function validateDashboardData(data) {
    if (!data || typeof data !== 'object') {
        return false;
    }

    if (!Array.isArray(data.categories)) {
        return false;
    }

    // 각 카테고리 검증
    for (const category of data.categories) {
        if (!validateCategory(category)) {
            return false;
        }
    }

    return true;
}

/**
 * Category 유효성 검증
 */
function validateCategory(category) {
    if (!category || typeof category !== 'object') {
        return false;
    }

    // ID 검증
    if (!category.id || !/^cat\d+$/.test(category.id)) {
        return false;
    }

    // 타입 검증
    if (!['core', 'basic'].includes(category.type)) {
        return false;
    }

    // 제목 검증
    if (!category.title || category.title.length < 3 || category.title.length > 200) {
        return false;
    }

    // 메트릭 검증
    if (!category.metrics || !validateMetrics(category.metrics)) {
        return false;
    }

    // Subcategories 검증
    if (!Array.isArray(category.subcategories)) {
        return false;
    }

    for (const subcategory of category.subcategories) {
        if (!validateSubcategory(subcategory)) {
            return false;
        }
    }

    return true;
}

/**
 * Subcategory 유효성 검증
 */
function validateSubcategory(subcategory) {
    if (!subcategory || typeof subcategory !== 'object') {
        return false;
    }

    // ID 검증
    if (!subcategory.id || !/^sub\d+-\d+$/.test(subcategory.id)) {
        return false;
    }

    // 제목 검증
    if (!subcategory.title || subcategory.title.length < 3 || subcategory.title.length > 500) {
        return false;
    }

    // Tasks 검증
    if (!Array.isArray(subcategory.tasks)) {
        return false;
    }

    for (const task of subcategory.tasks) {
        if (!validateTask(task)) {
            return false;
        }
    }

    return true;
}

/**
 * Task 유효성 검증
 */
function validateTask(task) {
    if (!task || typeof task !== 'object') {
        return false;
    }

    // ID 검증
    if (!task.id || !/^task\d+-\d+-\d+$/.test(task.id)) {
        return false;
    }

    // 제목 검증
    if (!task.title || task.title.length < 3 || task.title.length > 200) {
        return false;
    }

    // 개요 검증
    if (!task.overview || task.overview.length < 10 || task.overview.length > 1000) {
        return false;
    }

    // 조직 검증
    const validOrganizations = [
        'MNO AT/DT기획담당',
        'Product&Brand본부',
        'Sales&Marketing본부',
        'Enterprise사업본부',
        'AT/DT센터',
        'Network센터',
        '안전보건실'
    ];
    if (!validOrganizations.includes(task.organization)) {
        return false;
    }

    // 메트릭 검증
    if (!task.metrics || !validateMetrics(task.metrics)) {
        return false;
    }

    return true;
}

/**
 * Metrics 유효성 검증
 */
function validateMetrics(metrics) {
    if (!metrics || typeof metrics !== 'object') {
        return false;
    }

    // 필수 필드 검증
    if (!metrics.current || !metrics.unit || !metrics.target || !metrics.achievement) {
        return false;
    }

    // 달성률 검증 (숫자 또는 퍼센트 문자열)
    const achievementValue = parseFloat(metrics.achievement);
    if (isNaN(achievementValue) || achievementValue < 0 || achievementValue > 100) {
        return false;
    }

    return true;
}

/**
 * 다음 Category ID 생성
 */
function generateCategoryId(categories) {
    if (!categories || categories.length === 0) {
        return 'cat1';
    }

    const maxId = Math.max(...categories.map(cat => {
        const match = cat.id.match(/^cat(\d+)$/);
        return match ? parseInt(match[1]) : 0;
    }));

    return `cat${maxId + 1}`;
}

/**
 * 다음 Subcategory ID 생성
 */
function generateSubcategoryId(categoryId, subcategories) {
    if (!subcategories || subcategories.length === 0) {
        const catNum = categoryId.match(/\d+/)[0];
        return `sub${catNum}-1`;
    }

    const catNum = categoryId.match(/\d+/)[0];
    const maxSubId = Math.max(...subcategories.map(sub => {
        const match = sub.id.match(/^sub\d+-(\d+)$/);
        return match ? parseInt(match[1]) : 0;
    }));

    return `sub${catNum}-${maxSubId + 1}`;
}

/**
 * 다음 Task ID 생성
 */
function generateTaskId(categoryId, subcategoryId, tasks) {
    if (!tasks || tasks.length === 0) {
        const catNum = categoryId.match(/\d+/)[0];
        const subNum = subcategoryId.match(/\d+-(\d+)$/)[1];
        return `task${catNum}-${subNum}-1`;
    }

    const catNum = categoryId.match(/\d+/)[0];
    const subNum = subcategoryId.match(/\d+-(\d+)$/)[1];
    const maxTaskId = Math.max(...tasks.map(task => {
        const match = task.id.match(/^task\d+-\d+-(\d+)$/);
        return match ? parseInt(match[1]) : 0;
    }));

    return `task${catNum}-${subNum}-${maxTaskId + 1}`;
}

/**
 * 데이터 Export (JSON 파일 다운로드)
 */
function exportData() {
    try {
        const data = getDashboardData();
        if (!data) {
            throw new Error('내보낼 데이터가 없습니다');
        }

        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const filename = `mno_dashboard_data_${timestamp}.json`;

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        return true;
    } catch (error) {
        console.error('데이터 Export 실패:', error);
        return false;
    }
}

/**
 * 데이터 Import (JSON 파일 업로드)
 */
function importData(file, replaceAll = false) {
    return new Promise((resolve, reject) => {
        if (!file || file.type !== 'application/json') {
            reject(new Error('유효한 JSON 파일을 선택해주세요'));
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);

                // 유효성 검증
                if (!validateDashboardData(importedData)) {
                    throw new Error('유효하지 않은 데이터 형식입니다');
                }

                if (replaceAll) {
                    // 전체 교체
                    saveDashboardData(importedData);
                } else {
                    // 병합
                    const existingData = getDashboardData() || { categories: [], taskDetails: {} };
                    const mergedData = {
                        categories: [...existingData.categories, ...importedData.categories],
                        taskDetails: { ...existingData.taskDetails, ...importedData.taskDetails }
                    };
                    saveDashboardData(mergedData);
                }

                resolve(true);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = () => {
            reject(new Error('파일 읽기 실패'));
        };

        reader.readAsText(file);
    });
}

/**
 * 자동 백업 생성
 */
function createAutoBackup(data) {
    try {
        const backupsString = localStorage.getItem(BACKUP_KEY);
        let backups = backupsString ? JSON.parse(backupsString) : [];

        // 새 백업 추가
        backups.unshift({
            timestamp: new Date().toISOString(),
            data: data
        });

        // 최대 개수 유지
        if (backups.length > MAX_BACKUPS) {
            backups = backups.slice(0, MAX_BACKUPS);
        }

        localStorage.setItem(BACKUP_KEY, JSON.stringify(backups));
    } catch (error) {
        console.error('백업 생성 실패:', error);
    }
}

/**
 * 백업 목록 가져오기
 */
function getBackups() {
    try {
        const backupsString = localStorage.getItem(BACKUP_KEY);
        return backupsString ? JSON.parse(backupsString) : [];
    } catch (error) {
        console.error('백업 목록 로드 실패:', error);
        return [];
    }
}

/**
 * 백업 복원
 */
function restoreBackup(index) {
    try {
        const backups = getBackups();
        if (index < 0 || index >= backups.length) {
            throw new Error('유효하지 않은 백업 인덱스');
        }

        const backup = backups[index];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(backup.data));

        return true;
    } catch (error) {
        console.error('백업 복원 실패:', error);
        return false;
    }
}

/**
 * 특정 Category 찾기
 */
function findCategory(categories, categoryId) {
    return categories.find(cat => cat.id === categoryId);
}

/**
 * 특정 Subcategory 찾기
 */
function findSubcategory(category, subcategoryId) {
    if (!category || !category.subcategories) {
        return null;
    }
    return category.subcategories.find(sub => sub.id === subcategoryId);
}

/**
 * 특정 Task 찾기
 */
function findTask(subcategory, taskId) {
    if (!subcategory || !subcategory.tasks) {
        return null;
    }
    return subcategory.tasks.find(task => task.id === taskId);
}

/**
 * Category 하위 항목 개수 계산
 */
function countCategoryChildren(category) {
    if (!category || !category.subcategories) {
        return 0;
    }

    let totalTasks = 0;
    for (const subcategory of category.subcategories) {
        totalTasks += (subcategory.tasks || []).length;
    }

    return {
        subcategories: category.subcategories.length,
        tasks: totalTasks,
        total: category.subcategories.length + totalTasks
    };
}

/**
 * Subcategory 하위 항목 개수 계산
 */
function countSubcategoryChildren(subcategory) {
    if (!subcategory || !subcategory.tasks) {
        return 0;
    }
    return subcategory.tasks.length;
}

// 전역 노출
if (typeof window !== 'undefined') {
    window.DataManager = {
        getDashboardData,
        saveDashboardData,
        validateCategory,
        validateSubcategory,
        validateTask,
        validateMetrics,
        generateCategoryId,
        generateSubcategoryId,
        generateTaskId,
        exportData,
        importData,
        createAutoBackup,
        getBackups,
        restoreBackup,
        findCategory,
        findSubcategory,
        findTask,
        countCategoryChildren,
        countSubcategoryChildren
    };
}

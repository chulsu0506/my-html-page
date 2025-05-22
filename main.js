<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>복지정책 정보 사이트 - 공통 JavaScript</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
    <style>
        body {
            font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
            background-color: #f5f7fa;
            padding: 20px;
        }
        pre {
            background-color: #f8f9fa;
            border-radius: 5px;
            padding: 15px;
            overflow-x: auto;
            font-family: monospace;
            margin-bottom: 20px;
        }
        h1 {
            color: #0275ff;
            margin-bottom: 20px;
        }
        p {
            margin-bottom: 15px;
        }
    </style>
</head>
<body class="max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold">복지정책 정보 사이트 - 공통 JavaScript</h1>
    <p>아래는 복지정책 정보 사이트의 모든 페이지에서 사용할 공통 JavaScript 코드입니다:</p>
    
    <pre>
/**
 * 복지정책 정보 사이트 공통 JavaScript
 * 모든 페이지에서 사용되는 인터랙션과 기능을 정의합니다.
 * 
 * 작성일: 2025년 5월
 */

document.addEventListener('DOMContentLoaded', function() {
    // 페이지 로드 완료 시 애니메이션
    document.body.classList.add('loaded');
    
    // 햄버거 메뉴 토글 기능
    initHamburgerMenu();
    
    // FAQ 아코디언 기능
    initFAQAccordion();
    
    // 현재 활성화된 메뉴 항목 하이라이트
    highlightCurrentMenuItem();
    
    // 정책 카드 클릭 이벤트
    initPolicyCards();
    
    // 스크롤에 따른 헤더 동작
    initScrollHeader();
    
    // 모바일 디바이스 감지 및 최적화
    detectMobileDevice();
});

/**
 * 햄버거 메뉴 토글 기능 초기화
 * 클릭 시 사이드바를 표시하거나 숨깁니다.
 */
function initHamburgerMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    
    if (hamburgerBtn && sidebar) {
        // 햄버거 메뉴 클릭 이벤트
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // 이벤트 버블링 방지
            sidebar.classList.toggle('active');
            document.body.classList.toggle('sidebar-open');
        });
        
        // 사이드바 외부 클릭 시 닫기 기능
        document.addEventListener('click', function(e) {
            if (sidebar.classList.contains('active') && 
                !sidebar.contains(e.target) && 
                !hamburgerBtn.contains(e.target)) {
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        });
        
        // 사이드바 내 메뉴 항목 클릭 시 사이드바 닫기
        const menuItems = sidebar.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            });
        });
    }
}

/**
 * 현재 페이지에 해당하는 메뉴 항목을 하이라이트합니다.
 */
function highlightCurrentMenuItem() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.menu-item a');
    
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        
        // 현재 경로가 메뉴 항목의 href를 포함하면 활성화
        if (currentPath.includes(href) && href !== '/') {
            item.parentElement.classList.add('active');
        } 
        // 메인 페이지인 경우
        else if (currentPath === '/' && href === '/') {
            item.parentElement.classList.add('active');
        }
    });
}

/**
 * FAQ 아코디언 기능 초기화
 * 질문 클릭 시 답변을 표시하거나 숨깁니다.
 */
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // 현재 활성화된 답변
            const answer = this.nextElementSibling;
            
            // 열려있으면 닫고, 닫혀있으면 열기
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                this.classList.remove('active');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                this.classList.add('active');
            }
        });
    });
}

/**
 * 정책 카드 클릭 이벤트 초기화
 * 카테고리 페이지에서 정책 카드 클릭 시 해당 정책 페이지로 이동합니다.
 */
function initPolicyCards() {
    const policyCards = document.querySelectorAll('.policy-card');
    
    policyCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
        
        // 카드 내부의 버튼 클릭 이벤트 버블링 방지
        const buttons = card.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });
    });
}

/**
 * 스크롤에 따른 헤더 동작 초기화
 * 스크롤 다운 시 헤더 숨김, 스크롤 업 시 헤더 표시
 */
function initScrollHeader() {
    const header = document.querySelector('header');
    
    if (header) {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // 스크롤 방향 감지
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // 아래로 스크롤 - 헤더 숨김
                header.classList.add('header-hidden');
            } else {
                // 위로 스크롤 - 헤더 표시
                header.classList.remove('header-hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

/**
 * 모바일 디바이스 감지 및 최적화
 */
function detectMobileDevice() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        document.body.classList.add('mobile-device');
        
        // 모바일에서 전화번호 클릭 시 전화 걸기 기능 활성화
        const phoneNumbers = document.querySelectorAll('.phone-number');
        phoneNumbers.forEach(number => {
            const tel = number.textContent.replace(/-/g, '');
            number.innerHTML = `<a href="tel:${tel}">${number.textContent}</a>`;
        });
    }
}

/**
 * URL 파라미터를 객체로 변환하는 유틸리티 함수
 */
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');
    
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    
    return params;
}

/**
 * 페이지 이동 함수 
 * 페이지 간 이동 시 사용
 */
function navigateTo(url) {
    window.location.href = url;
}
    </pre>
    
    <p>이 JavaScript 파일은 <code>main.js</code> 이름으로 저장하여 모든 HTML 페이지에서 다음과 같이 포함시켜 사용합니다:</p>
    <pre>&lt;script src="assets/js/main.js"&gt;&lt;/script&gt;</pre>
</body>
</html>

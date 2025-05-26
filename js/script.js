// js/script.js

// 카테고리 정보를 전역 스코프 또는 접근 가능한 스코프에 정의
const siteCategories = [
    { name: "홈", href: "index.html", icon: "images/ico_main.png" },
    { name: "임신·출산 지원", href: "pregnancy_childbirth_landing.html", icon: "images/ico_pregnancy.png" },
    { name: "영아·유아 양육 지원", href: "infant_rearing_landing.html", icon: "images/ico_infant.png" },
    { name: "보육·교육 지원", href: "childcare_education_landing.html", icon: "images/ico_education.png" },
    { name: "일·가정 양립 지원", href: "work_family_landing.html", icon: "images/ico_work-family.png" },
    { name: "신혼부부·출산가구 주거 지원", href: "housing_support_landing.html", icon: "images/ico_housing.png" },
    { name: "다자녀 가구 지원", href: "multi_child_landing.html", icon: "images/ico_multi-child.png" },
    { name: "기타 저소득층 지원", href: "etc_support_landing.html", icon: "images/ico_support.png" }
];

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
            // 접근성 향상을 위해 aria-expanded 상태 업데이트
            const isExpanded = mainNav.classList.contains('active');
            hamburgerMenu.setAttribute('aria-expanded', isExpanded);
        });
    }

    // 메인 내비게이션(햄버거 메뉴 안)을 siteCategories 배열로 채웁니다.
    const navUl = mainNav.querySelector('ul');
    if (navUl) {
        navUl.innerHTML = ''; // 기존 목록 초기화 (중복 방지)
        siteCategories.forEach(category => { // 이제 siteCategories를 사용합니다.
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = category.href;

            if (category.icon) {
                const img = document.createElement('img');
                img.src = category.icon;
                img.alt = ""; // 아이콘은 장식용이므로 alt는 비워둠 (텍스트는 링크 안에 있음)
                a.appendChild(img);
            }
            a.appendChild(document.createTextNode(category.name));
            li.appendChild(a);
            navUl.appendChild(li);
        });
    }
});
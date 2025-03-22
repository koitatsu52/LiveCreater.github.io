/**
 * LiveCreate - Main JavaScript
 */

// モバイルメニュー
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// ナビゲーションリンクをクリックしたらメニューを閉じる
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// スクロール時のヘッダースタイル変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ページロード時のアニメーション
window.addEventListener('load', function() {
    // ヒーローコンテンツのフェードイン
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('active');
        document.querySelector('.hero-image').classList.add('active');
    }, 100);
});

// スクロール時の要素表示アニメーション
// この機能を有効にする場合は、CSSに対応するスタイルを追加し、
// 各セクションにdata-animate属性を追加する必要があります
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('[data-animate]').forEach(element => {
        observer.observe(element);
    });
};

// IntersectionObserverがサポートされている場合のみ実行
if ('IntersectionObserver' in window) {
    observeElements();
}

// フォーム送信処理（必要に応じて実装）
const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // フォームデータの取得と送信処理を実装
    // 例: 登録フォームのAJAX送信など
    
    // 成功時の処理
    alert('送信しました！実際の実装では、ここにAPIリクエストとレスポンス処理を入れます。');
    
    // フォームリセット
    event.target.reset();
};

// 登録フォームが存在する場合、送信イベントリスナーを追加
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
});

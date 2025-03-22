<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LiveCreate - クリエイターとファンを繋ぐ体験プラットフォーム</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #6366F1;
            --primary-dark: #4F46E5;
            --primary-light: #A5B4FC;
            --secondary: #EC4899;
            --secondary-dark: #DB2777;
            --accent: #8B5CF6;
            --light: #F9FAFB;
            --dark: #1F2937;
            --success: #10B981;
            --warning: #F59E0B;
            --danger: #EF4444;
            --gray-50: #F9FAFB;
            --gray-100: #F3F4F6;
            --gray-200: #E5E7EB;
            --gray-300: #D1D5DB;
            --gray-400: #9CA3AF;
            --gray-500: #6B7280;
            --gray-600: #4B5563;
            --gray-700: #374151;
            --gray-800: #1F2937;
            --gray-900: #111827;
            --container-width: 1140px;
            --section-spacing: 80px;
            --border-radius: 8px;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Noto Sans JP', sans-serif;
            color: var(--gray-800);
            background-color: var(--light);
            line-height: 1.6;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: 1rem;
        }

        h1 {
            font-size: 2.75rem;
        }

        h2 {
            font-size: 2.25rem;
            margin-bottom: 1.5rem;
        }

        h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        p {
            margin-bottom: 1.5rem;
        }

        a {
            text-decoration: none;
            color: var(--primary);
            transition: color 0.3s ease;
        }

        a:hover {
            color: var(--primary-dark);
        }

        img {
            max-width: 100%;
            height: auto;
            display: block;
        }

        .container {
            width: 100%;
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 0 24px;
        }

        .btn {
            display: inline-block;
            padding: 12px 24px;
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.5;
            text-align: center;
            cursor: pointer;
            user-select: none;
            border: none;
            border-radius: var(--border-radius);
            transition: all 0.3s ease;
            white-space: nowrap;
        }

        .btn-primary {
            background-color: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }

        .btn-secondary {
            background-color: var(--secondary);
            color: white;
        }

        .btn-secondary:hover {
            background-color: var(--secondary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }

        .btn-outline {
            background-color: transparent;
            color: var(--primary);
            border: 2px solid var(--primary);
        }

        .btn-outline:hover {
            background-color: var(--primary);
            color: white;
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }

        .btn-lg {
            padding: 16px 32px;
            font-size: 1.125rem;
        }

        .section {
            padding: var(--section-spacing) 0;
        }

        .section-light {
            background-color: var(--light);
        }

        .section-dark {
            background-color: var(--gray-100);
        }

        .section-colored {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
        }

        .section-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 48px;
        }

        .section-header p {
            font-size: 1.125rem;
            color: var(--gray-600);
        }

        .section-colored .section-header p {
            color: rgba(255, 255, 255, 0.9);
        }

        /* Header & Navigation */
        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background-color: white;
            box-shadow: var(--shadow-sm);
            transition: all 0.3s ease;
        }

        header.scrolled {
            box-shadow: var(--shadow);
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;
        }

        .logo {
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--primary);
        }

        .logo span {
            color: var(--secondary);
        }

        .nav-links {
            display: flex;
            align-items: center;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .nav-links li {
            margin-left: 32px;
        }

        .nav-links a {
            color: var(--gray-700);
            font-weight: 500;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .nav-links .btn {
            margin-left: 16px;
        }

        .hamburger {
            display: none;
            cursor: pointer;
            width: 30px;
            height: 20px;
            position: relative;
            z-index: 1002;
        }

        .hamburger span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background: var(--gray-700);
            border-radius: 3px;
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: .25s ease-in-out;
        }

        .hamburger span:nth-child(1) {
            top: 0px;
        }

        .hamburger span:nth-child(2), .hamburger span:nth-child(3) {
            top: 10px;
        }

        .hamburger span:nth-child(4) {
            top: 20px;
        }

        .hamburger.active span:nth-child(1) {
            top: 10px;
            width: 0%;
            left: 50%;
        }

        .hamburger.active span:nth-child(2) {
            transform: rotate(45deg);
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg);
        }

        .hamburger.active span:nth-child(4) {
            top: 10px;
            width: 0%;
            left: 50%;
        }

        /* Hero Section */
        .hero {
            padding: 160px 0 80px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            text-align: center;
            position: relative;
        }

        .hero:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/png/512/ios7-circle-outline.png');
            background-size: 20px;
            opacity: 0.1;
            pointer-events: none;
        }

        .hero-content {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 24px;
            line-height: 1.2;
        }

        .hero p {
            font-size: 1.25rem;
            margin-bottom: 40px;
            opacity: 0.9;
        }

        .hero-buttons {
            display: flex;
            justify-content: center;
            gap: 16px;
            margin-bottom: 48px;
        }

        .hero-image {
            max-width: 900px;
            margin: 0 auto;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-xl);
            overflow: hidden;
        }

        /* Features Section */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 32px;
        }

        .feature-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 32px;
            box-shadow: var(--shadow);
            transition: all 0.3s ease;
            height: 100%;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
        }

        .feature-icon {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            font-size: 1.75rem;
            color: white;
        }

        /* Two Column Sections */
        .two-columns {
            display: flex;
            align-items: center;
            gap: 64px;
        }

        .column {
            flex: 1;
        }

        .image-column img {
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
        }

        .bullet-list {
            list-style: none;
            margin-bottom: 32px;
        }

        .bullet-list li {
            position: relative;
            padding-left: 32px;
            margin-bottom: 16px;
        }

        .bullet-list li:before {
            content: '✓';
            position: absolute;
            left: 0;
            top: 2px;
            color: var(--success);
            font-weight: bold;
            font-size: 1.125rem;
        }

        /* Testimonials */
        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 32px;
        }

        .testimonial-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 32px;
            box-shadow: var(--shadow);
            height: 100%;
        }

        .testimonial-text {
            margin-bottom: 24px;
            font-style: italic;
            position: relative;
            padding-left: 24px;
        }

        .testimonial-text:before {
            content: '"';
            position: absolute;
            left: 0;
            top: 0;
            font-size: 3rem;
            color: var(--primary-light);
            line-height: 1;
            opacity: 0.5;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
        }

        .author-avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 16px;
            flex-shrink: 0;
        }

        .author-info h4 {
            margin-bottom: 4px;
            font-size: 1rem;
        }

        .author-info p {
            margin-bottom: 0;
            color: var(--gray-500);
            font-size: 0.875rem;
        }

        /* Pricing */
        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 32px;
        }

        .pricing-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 32px;
            box-shadow: var(--shadow);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .pricing-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
        }

        .pricing-card.featured {
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            color: white;
        }

        .pricing-card.featured:before {
            content: 'おすすめ';
            position: absolute;
            top: 16px;
            right: -24px;
            background-color: var(--secondary);
            color: white;
            padding: 4px 32px;
            font-size: 0.75rem;
            font-weight: 700;
            transform: rotate(45deg);
        }

        .pricing-type {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 16px;
        }

        .price {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1;
            margin-bottom: 16px;
            color: var(--primary);
        }

        .pricing-card.featured .price {
            color: white;
        }

        .price-details {
            margin-bottom: 24px;
            color: var(--gray-500);
        }

        .pricing-card.featured .price-details {
            color: rgba(255, 255, 255, 0.8);
        }

        .pricing-features {
            list-style: none;
            margin-bottom: 32px;
            flex: 1;
        }

        .pricing-features li {
            position: relative;
            padding-left: 28px;
            margin-bottom: 12px;
        }

        .pricing-features li:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--success);
        }

        .pricing-card.featured .pricing-features li:before {
            color: white;
        }

        /* CTA Section */
        .cta {
            text-align: center;
        }

        .cta h2 {
            font-size: 3rem;
            margin-bottom: 24px;
        }

        .cta p {
            font-size: 1.25rem;
            max-width: 800px;
            margin: 0 auto 40px;
            opacity: 0.9;
        }

        /* Footer */
        footer {
            background-color: var(--dark);
            color: var(--gray-300);
            padding: 80px 0 40px;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 48px;
        }

        .footer-column h3 {
            color: white;
            margin-bottom: 24px;
            font-size: 1.25rem;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 16px;
        }

        .footer-links a {
            color: var(--gray-400);
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: white;
        }

        .footer-bottom {
            margin-top: 64px;
            padding-top: 32px;
            border-top: 1px solid var(--gray-700);
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 24px;
        }

        .social-links {
            display: flex;
            gap: 16px;
        }

        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: var(--gray-700);
            color: white;
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            background-color: var(--primary);
            transform: translateY(-3px);
        }

        .copyright {
            color: var(--gray-500);
            font-size: 0.875rem;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
            h1 {
                font-size: 2.5rem;
            }
            
            h2 {
                font-size: 2rem;
            }
            
            .hero h1 {
                font-size: 2.75rem;
            }
            
            .two-columns {
                flex-direction: column;
                gap: 48px;
            }
            
            .image-column {
                order: -1;
            }
            
            .cta h2 {
                font-size: 2.5rem;
            }
        }

        @media (max-width: 768px) {
            :root {
                --section-spacing: 60px;
            }
            
            h1 {
                font-size: 2.25rem;
            }
            
            h2 {
                font-size: 1.75rem;
            }
            
            .hero {
                padding: 120px 0 60px;
            }
            
            .hero h1 {
                font-size: 2.25rem;
            }
            
            .hero p {
                font-size: 1.125rem;
            }
            
            .hero-buttons {
                flex-direction: column;
            }
            
            .hamburger {
                display: block;
            }
            
            .nav-links {
                position: fixed;
                top: 0;
                right: -100%;
                width: 75%;
                height: 100vh;
                background-color: white;
                flex-direction: column;
                align-items: flex-start;
                padding: 80px 32px;
                transition: all 0.3s ease;
                box-shadow: var(--shadow-xl);
                z-index: 1001;
            }
            
            .nav-links.active {
                right: 0;
            }
            
            .nav-links li {
                margin: 16px 0;
                width: 100%;
            }
            
            .nav-links .btn {
                margin: 16px 0 0;
                width: 100%;
            }
            
            .footer-bottom {
                flex-direction: column-reverse;
                text-align: center;
            }
            
            .social-links {
                justify-content: center;
                margin-bottom: 16px;
            }
            
            .cta h2 {
                font-size: 2rem;
            }
        }

        @media (max-width: 576px) {
            :root {
                --section-spacing: 48px;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            h2 {
                font-size: 1.5rem;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .section-header {
                margin-bottom: 32px;
            }
            
            .feature-card, .testimonial-card, .pricing-card {
                padding: 24px;
            }
            
            .pricing-grid {
                grid-template-columns: 1fr;
            }
            
            .cta h2 {
                font-size: 1.75rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav class="navbar">
                <a href="#" class="logo">Live<span>Create</span></a>
                
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <ul class="nav-links">
                    <li><a href="#features">特徴</a></li>
                    <li><a href="#for-creator">クリエイター向け</a></li>
                    <li><a href="#for-fan">ファン向け</a></li>
                    <li><a href="#pricing">料金</a></li>
                    <li><a href="#" class="btn btn-primary">登録する</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>クリエイターとファンを繋ぐ<br>体験プラットフォーム</h1>
                <p>LiveCreateは、クリエイターが安心して創作に打ち込み、ファンが積極的に応援活動を楽しめる新しいクリエイター支援のエコシステムです。双方向の交流で生まれる感情価値や共創体験を提供します。</p>
                <div class="hero-buttons">
                    <a href="#" class="btn btn-secondary btn-lg">クリエイターとして始める</a>
                    <a href="#" class="btn btn-outline btn-lg">ファンとして始める</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="/api/placeholder/900/500" alt="LiveCreateプラットフォームイメージ">
            </div>
        </div>
    </section>

    <section id="features" class="section section-light">
        <div class="container">
            <div class="section-header">
                <h2>ライブ・クリエイターエコノミーを実現する特徴</h2>
                <p>LiveCreateは単なる配信サービスではなく、クリエイターの持続可能な収益確保とファンの満足度向上を両立するための包括的なプラットフォームです。</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🎭</div>
                    <h3>イベント体験の共有</h3>
                    <p>オンラインライブ配信、ワークショップ、交流会など多様なイベントを通じて、クリエイターとファンが直接交流できます。チケット販売機能で収益化も簡単です。</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💰</div>
                    <h3>複数の収益化手段</h3>
                    <p>月額サブスクリプション、イベントチケット、グッズ販売など複数の方法でクリエイターを支援できます。従来のSNSでは実現しにくい直接支援モデルを提供します。</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">👥</div>
                    <h3>コミュニティ形成</h3>
                    <p>好きなクリエイターを中心としたコミュニティで、同じ趣味を持つファン同士が交流できます。共通の話題で盛り上がり、推し活をより楽しめる場所です。</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>分析ダッシュボード</h3>
                    <p>クリエイターは収益レポートやファンの反応を分析できるダッシュボードを活用し、戦略的な創作活動が可能です。データに基づいた意思決定をサポートします。</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔍</div>
                    <h3>新たな才能の発見</h3>
                    <p>興味に基づいたレコメンド機能で、まだ知らない素晴らしいクリエイターとの出会いを提供します。ジャンルやスタイルで絞り込み検索も可能です。</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🌐</div>
                    <h3>オールインワンプラットフォーム</h3>
                    <p>複数のサービスに分散していた機能を一つに統合。コンテンツ配信、課金、告知、コミュニケーションをシームレスに行えます。</p>
                </div>
            </div>
        </div>
    </section>

    <section id="for-creator" class="section section-dark">
        <div class="container">
            <div class="two-columns">
                <div class="column text-column">
                    <h2>クリエイターの可能性を広げる</h2>
                    <p>LiveCreateは、あなたの創作活動を支え、ファンとの関係を深め、持続可能な収入を得るための総合プラットフォームです。</p>
                    <ul class="bullet-list">
                        <li>イベント作成・チケット販売機能で、ライブ配信やワークショップを簡単に収益化</li>
                        <li>月額制ファンクラブで、限定コンテンツを提供し安定的な継続収入を確保</li>
                        <li>オリジナルグッズや作品のオンラインショップを簡単に開設</li>
                        <li>ファンとのダイレクトコミュニケーションで関係性を強化</li>
                        <li>収益レポートやファン分析ダッシュボードで戦略的な活動をサポート</li>
                    </ul>
                    <a href="#" class="btn btn-primary">クリエイターとして登録する</a>
                </div>
                <div class="column image-column">
                    <img src="/api/placeholder/600/400" alt="クリエイター向け機能イメージ">
                </div>
            </div>
        </div>
    </section>

    <section id="for-fan" class="section section-light">
        <div class="container">
            <div class="two-columns">
                <div class="column image-column">
                    <img src="/api/placeholder/600/400" alt="ファン向け体験イメージ">
                </div>
                <div class="column text-column">
                    <h2>推し活をもっと楽しく、もっと深く</h2>
                    <p>LiveCreateでは、単なる視聴者ではなく、クリエイターの創作プロセスに参加し、共に成長する体験を提供します。</p>
                    <ul class="bullet-list">
                        <li>興味関心に合わせた新しいクリエイターやイベントの発見</li>
                        <li>オンライン・オフラインイベントへの簡単参加とチケット管理</li>
                        <li>月額会員になって限定コンテンツやアーカイブ、特典を楽しめる</li>
                        <li>同じクリエイターを応援するファン同士の交流コミュニティ</li>
                        <li>クリエイターへのフィードバックやリクエストが直接届く</li>
                    </ul>
                    <a href="#" class="btn btn-primary">ファンとして登録する</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-dark">
        <div class="container">
            <div class="section-header">
                <h2>利用者の声</h2>
                <p>LiveCreateを通じて、クリエイターとファンがどのような体験をしているか、実際の声をご紹介します。</p>
            </div>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-text">
                        LiveCreateのおかげで、ファンと直接つながる喜びを感じながら、安定した収入を得られるようになりました。毎月のサブスクリプション収入があるので、創作に専念できる時間が増えました。
                    </div>
                    <div class="testimonial-author">
                        <div class="author-avatar">
                            <img src="/api/placeholder/56/56" alt="佐藤音楽家">
                        </div>
                        <div class="author-info">
                            <h4>佐藤 明</h4>
                            <p>インディーミュージシャン</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-text">
                        ファンからの直接的なサポートとフィードバックが、創作意欲を大きく高めてくれます。月に一度のオンラインライブが楽しみで仕方ありません。ファンとの距離が近くなったと感じます。
                    </div>
                    <div class="testimonial-author">
                        <div class="author-avatar">
                            <img src="/api/placeholder/56/56" alt="田中イラストレーター">
                        </div>
                        <div class="author-info">
                            <h4>田中 彩</h4>
                            <p>イラストレーター</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-text">
                        推しのライブ配信に参加して、直接質問できるのが最高です！他のSNSでは見られない限定コンテンツも楽しめて、もっと応援したいという気持ちが強くなりました。
                    </div>
                    <div class="testimonial-author">
                        <div class="author-avatar">
                            <img src="/api/placeholder/56/56" alt="山田ファン">
                        </div>
                        <div class="author-info">
                            <h4>山田 健太</h4>
                            <p>熱心なファン</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="pricing" class="section section-light">
        <div class="container">
            <div class="section-header">
                <h2>シンプルで透明な料金体系</h2>
                <p>LiveCreateではクリエイターの成長段階に合わせた料金プランをご用意しています。登録は無料、収益が発生した時のみ手数料が発生します。</p>
            </div>
            <div class="pricing-grid">
                <div class="pricing-card">
                    <div class="pricing-type">ベーシック</div>
                    <div class="price">5%</div>
                    <div class="price-details">取引額に対する手数料</div>
                    <ul class="pricing-features">
                        <li>イベント作成・チケット販売</li>
                        <li>月額サブスクリプション機能</li>
                        <li>基本的なファン交流ツール</li>
                        <li>シンプルな分析ダッシュボード</li>
                        <li>標準サポート</li>
                    </ul>
                    <a href="#" class="btn btn-outline">プラン詳細</a>
                </div>
                <div class="pricing-card featured">
                    <div class="pricing-type">プロフェッショナル</div>
                    <div class="price">10%</div>
                    <div class="price-details">取引額に対する手数料</div>
                    <ul class="pricing-features">
                        <li>すべてのベーシック機能</li>
                        <li>高度なコミュニティ管理ツール</li>
                        <li>詳細なファン分析と収益レポート</li>
                        <li>優先的な検索表示</li>
                        <li>優先サポート</li>
                    </ul>
                    <a href="#" class="btn btn-secondary">プラン詳細</a>
                </div>
                <div class="pricing-card">
                    <div class="pricing-type">エンタープライズ</div>
                    <div class="price">カスタム</div>
                    <div class="price-details">お問い合わせください</div>
                    <ul class="pricing-features">
                        <li>すべてのプロフェッショナル機能</li>
                        <li>カスタムブランディング</li>
                        <li>API連携</li>
                        <li>専任サポートマネージャー</li>
                        <li>カスタム開発・機能追加</li>
                    </ul>
                    <a href="#" class="btn btn-outline">お問い合わせ</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-colored cta">
        <div class="container">
            <h2>クリエイターとファンの新しい関係を始めよう</h2>
            <p>LiveCreateで、創作の価値が正当に評価され、ファンとの心の繋がりを深める体験をはじめませんか？</p>
            <a href="#" class="btn btn-secondary btn-lg">今すぐ無料登録</a>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h3>LiveCreate</h3>
                    <p>創造の価値を正当に還元し、クリエイターとファンの心をつなぐプラットフォーム</p>
                </div>
                <div class="footer-column">
                    <h3>サービス</h3>
                    <ul class="footer-links">
                        <li><a href="#">イベント機能</a></li>
                        <li><a href="#">サブスクリプション</a></li>
                        <li><a href="#">グッズ販売</a></li>
                        <li><a href="#">コミュニティ機能</a></li>
                        <li><a href="#">分析ツール</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>会社情報</h3>
                    <ul class="footer-links">
                        <li><a href="#">ミッション</a></li>
                        <li><a href="#">チーム紹介</a></li>
                        <li><a href="#">採用情報</a></li>
                        <li><a href="#">プレスリリース</a></li>
                        <li><a href="#">お問い合わせ</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>サポート</h3>
                    <ul class="footer-links">
                        <li><a href="#">ヘルプセンター</a></li>
                        <li><a href="#">利用規約</a></li>
                        <li><a href="#">プライバシーポリシー</a></li>
                        <li><a href="#">特定商取引法に基づく表記</a></li>
                        <li><a href="#">よくある質問</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="social-links">
                    <a href="#" class="social-link">X</a>
                    <a href="#" class="social-link">IG</a>
                    <a href="#" class="social-link">FB</a>
                    <a href="#" class="social-link">YT</a>
                </div>
                <div class="copyright">
                    &copy; 2025 LiveCreate. All rights reserved.
                </div>
            </div>
        </div>
    </footer>

    <script>
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
    </script>

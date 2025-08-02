import LiquidGlass from "./components/liquid-glass";
import "./index.css";

const RichPage = () => {
  return (
    <div className="rich-page">
      <LiquidGlass />
      {/* 顶部导航栏 */}
      <header className="rich-header">
        <nav className="rich-nav">
          <div className="logo">
            <h1>🎨 Rich Design</h1>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#home">首页</a>
            </li>
            <li>
              <a href="#about">关于</a>
            </li>
            <li>
              <a href="#services">服务</a>
            </li>
            <li>
              <a href="#contact">联系</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* 英雄区域 */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">欢迎来到多彩世界</h2>
          <p className="hero-subtitle">体验丰富的视觉设计和交互效果</p>
          <button className="cta-button">开始探索</button>
        </div>
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </section>

      {/* 特色卡片区域 */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">特色功能</h2>
          <div className="features-grid">
            <div className="feature-card card-primary">
              <div className="card-icon">🚀</div>
              <h3>高性能</h3>
              <p>优化的性能表现，流畅的用户体验</p>
            </div>
            <div className="feature-card card-secondary">
              <div className="card-icon">🎨</div>
              <h3>美观设计</h3>
              <p>现代化的界面设计，视觉效果出众</p>
            </div>
            <div className="feature-card card-tertiary">
              <div className="card-icon">⚡</div>
              <h3>快速响应</h3>
              <p>快速加载，响应式设计适配各种设备</p>
            </div>
            <div className="feature-card card-quaternary">
              <div className="card-icon">🔧</div>
              <h3>易于定制</h3>
              <p>灵活的配置选项，满足个性化需求</p>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据区域 */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">满意用户</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">项目完成</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">技术支持</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">正常运行时间</div>
            </div>
          </div>
        </div>
      </section>

      {/* 内容区域 */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-left">
              <h2>关于我们</h2>
              <p>
                我们致力于创造卓越的数字体验，通过创新的设计和技术解决方案帮助客户实现目标。
              </p>
              <ul className="feature-list">
                <li>✨ 创新设计理念</li>
                <li>🔥 前沿技术栈</li>
                <li>💡 专业团队支持</li>
                <li>🎯 结果导向服务</li>
              </ul>
            </div>
            <div className="content-right">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span>🖼️</span>
                  <p>精美图片展示区域</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部区域 */}
      <footer className="rich-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>联系方式</h3>
              <p>📧 contact@example.com</p>
              <p>📱 +86 123 4567 8900</p>
            </div>
            <div className="footer-section">
              <h3>关注我们</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  🐦 Twitter
                </a>
                <a href="#" className="social-link">
                  📘 Facebook
                </a>
                <a href="#" className="social-link">
                  📷 Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RichPage;

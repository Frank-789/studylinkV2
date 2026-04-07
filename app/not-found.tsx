export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text mb-4">404 - 页面未找到</h1>
        <p className="text-muted mb-8">抱歉，您访问的页面不存在。</p>
        <a
          href="/"
          className="btn-primary"
        >
          返回首页
        </a>
      </div>
    </div>
  )
}
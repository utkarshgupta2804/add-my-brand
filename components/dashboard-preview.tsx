export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px]">
      <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-2 shadow-2xl backdrop-blur-sm border border-primary/20">
        <div className="bg-gradient-to-br from-background/95 to-background/80 rounded-xl overflow-hidden backdrop-blur-md border border-primary/10">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 border-b border-primary/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">AI Marketing Dashboard</h3>
                  <p className="text-muted-foreground text-sm">Campaign Performance Overview</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Live</span>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Campaign ROI", value: "+247%", trend: "↗" },
                { label: "Engagement Rate", value: "89.2%", trend: "↗" },
                { label: "AI Content Generated", value: "1,247", trend: "↗" },
                { label: "Conversion Rate", value: "12.8%", trend: "↗" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-primary/5 to-transparent p-4 rounded-lg border border-primary/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">{stat.label}</span>
                    <span className="text-green-400 text-lg">{stat.trend}</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground mt-1">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-lg border border-primary/10">
              <h4 className="text-foreground font-semibold mb-4">AI Performance Analytics</h4>
              <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded flex items-end justify-center gap-2 p-4">
                {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-primary to-primary/60 rounded-t"
                    style={{ height: `${height}%`, width: "12px" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

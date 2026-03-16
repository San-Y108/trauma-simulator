function zoneClass(selectedRegion, region) {
  return selectedRegion === region ? 'body-zone selected' : 'body-zone';
}

export default function HumanBodyCanvas({ selectedRegion, onRegionChange, viewMode, setViewMode, landmarkOptions, intakeData }) {
  const isBack = viewMode === 'back';

  return (
    <section className="panel body-panel">
      <div className="panel-head">
        <div>
          <h2>人体定位辅助图</h2>
          <p className="panel-desc">点击区域同步切换部位，再在左侧细化标志点和方向。</p>
        </div>
        <div className="segment-control">
          <button className={viewMode === 'front' ? 'active' : ''} onClick={() => setViewMode('front')}>正面</button>
          <button className={viewMode === 'back' ? 'active' : ''} onClick={() => setViewMode('back')}>背面</button>
        </div>
      </div>

      <div className="body-stage">
        <svg width="320" height="640" viewBox="0 0 320 640">
          <defs>
            <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#d9e6f2" />
              <stop offset="100%" stopColor="#b8c8d7" />
            </linearGradient>
          </defs>

          <circle cx="160" cy="64" r="34" fill="url(#skin)" stroke="#73859a" strokeWidth="2" />
          <rect x="146" y="96" width="28" height="28" rx="12" fill="url(#skin)" stroke="#73859a" strokeWidth="2" />

          <path d="M108 136 Q132 122 160 122 Q188 122 212 136 Q226 144 232 164 L246 226 Q250 248 242 276 L224 330 Q220 344 220 372 L220 400 Q220 430 160 436 Q100 430 100 400 L100 372 Q100 344 96 330 L78 276 Q70 248 74 226 L88 164 Q94 144 108 136 Z" fill="url(#skin)" stroke="#73859a" strokeWidth="2" />
          <path d="M104 436 Q124 422 142 420 L178 420 Q196 422 216 436 L206 474 Q192 492 160 496 Q128 492 114 474 Z" fill="url(#skin)" stroke="#73859a" strokeWidth="2" />
          <path d="M98 150 L76 250 Q70 278 78 316 L90 360 Q96 380 112 390 Q122 394 126 382 Q130 370 126 356 L112 300 Q106 270 112 240 L124 182 Q128 166 120 154 Z" fill="url(#skin)" stroke="#73859a" strokeWidth="2" />
          <path d="M222 150 L244 250 Q250 278 242 316 L230 360 Q224 380 208 390 Q198 394 194 382 Q190 370 194 356 L208 300 Q214 270 208 240 L196 182 Q192 166 200 154 Z" fill="url(#skin)" stroke="#73859a" strokeWidth="2" />
          <path d="M118 390 Q112 410 112 436 L112 494 Q112 522 102 570 Q98 588 110 602 Q122 614 132 600 Q140 590 144 566 L150 510 Q154 488 152 448 Q150 412 140 394 Z" fill="url(#skin)" stroke="#73859a" strokeWidth="2" />
          <path d="M202 390 Q208 410 208 436 L208 494 Q208 522 218 570 Q222 588 210 602 Q198 614 188 600 Q180 590 176 566 L170 510 Q166 488 168 448 Q170 412 180 394 Z" fill="url(#skin)" stroke="#73859a" strokeWidth="2" />

          <circle className={zoneClass(selectedRegion, '肩部')} cx="104" cy="154" r="18" onClick={() => onRegionChange('肩部')} />
          <circle className={zoneClass(selectedRegion, '肩部')} cx="216" cy="154" r="18" onClick={() => onRegionChange('肩部')} />
          <path className={zoneClass(selectedRegion, '肩部')} d="M108 138 Q132 126 160 126 Q188 126 212 138 L202 166 Q184 158 160 158 Q136 158 118 166 Z" onClick={() => onRegionChange('肩部')} />

          <rect className={zoneClass(selectedRegion, '膝部')} x="122" y="496" width="24" height="26" rx="10" onClick={() => onRegionChange('膝部')} />
          <rect className={zoneClass(selectedRegion, '膝部')} x="174" y="496" width="24" height="26" rx="10" onClick={() => onRegionChange('膝部')} />

          <ellipse className={zoneClass(selectedRegion, '踝部')} cx="126" cy="604" rx="20" ry="10" onClick={() => onRegionChange('踝部')} />
          <ellipse className={zoneClass(selectedRegion, '踝部')} cx="194" cy="604" rx="20" ry="10" onClick={() => onRegionChange('踝部')} />

          {isBack ? (
            <path className={zoneClass(selectedRegion, '肩部')} d="M110 150 Q134 140 160 140 Q186 140 210 150" onClick={() => onRegionChange('肩部')} />
          ) : null}
        </svg>
      </div>

      <div className="body-info-box">
        <div><strong>当前部位：</strong>{selectedRegion}</div>
        <div><strong>当前标志点：</strong>{intakeData.landmark}</div>
        <div><strong>可选标志点：</strong>{landmarkOptions.join(' / ')}</div>
      </div>
    </section>
  );
}

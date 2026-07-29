const sharp = require('sharp');
const path = require('path');

const OUT = 'D:/SARAH-AGENCY/website/public/image/blog/tham-web-claude';

const desktopSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1440" height="810" viewBox="0 0 1440 810" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hdrGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0D3B38"/>
      <stop offset="100%" stop-color="#0F4C46"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1440" height="810" fill="#F9FAFB"/>
  <circle cx="1400" cy="100" r="320" fill="#CCFBF1" fill-opacity="0.25"/>
  <circle cx="40" cy="720" r="220" fill="#CCFBF1" fill-opacity="0.2"/>

  <!-- Header -->
  <rect width="1440" height="108" fill="url(#hdrGrad)"/>
  <text x="680" y="68" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="32" font-weight="700" fill="white">Build a Website with Claude — How to Get Visitors</text>
  <circle cx="1392" cy="54" r="24" fill="#0D9488"/>
  <text x="1392" y="62" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" font-weight="900" fill="white">S</text>
  <text x="1355" y="58" text-anchor="end" font-family="Arial,sans-serif" font-size="10" font-weight="600" fill="#99F6E4">SARALAK SEARCH</text>

  <!-- ===== COL 1: CLAUDE ===== -->
  <rect x="72" y="130" width="382" height="500" rx="16" fill="white" stroke="#E5E7EB" stroke-width="1.5"/>
  <rect x="72" y="130" width="382" height="6" rx="4" fill="#DA7756"/>
  <rect x="92" y="141" width="38" height="22" rx="11" fill="#DA7756"/>
  <text x="111" y="156" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="white">01</text>

  <circle cx="263" cy="204" r="44" fill="#FEF2EE"/>
  <circle cx="263" cy="204" r="34" fill="#DA7756"/>
  <text x="263" y="217" text-anchor="middle" font-family="Arial,sans-serif" font-size="30" font-weight="900" fill="white">C</text>

  <text x="263" y="272" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="18" font-weight="700" fill="#111827">Build Website with Claude</text>
  <rect x="188" y="284" width="150" height="24" rx="12" fill="#FEF3C7"/>
  <text x="263" y="300" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="600" fill="#92400E">Fast — 1 to 3 Days</text>
  <line x1="92" y1="322" x2="434" y2="322" stroke="#F3F4F6" stroke-width="1.5"/>

  <rect x="92" y="332" width="320" height="40" rx="8" fill="#FEF2EE"/>
  <rect x="92" y="332" width="4" height="40" rx="2" fill="#DA7756"/>
  <text x="110" y="349" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="#DA7756">01</text>
  <text x="128" y="349" font-family="Tahoma,Arial,sans-serif" font-size="13" font-weight="700" fill="#111827">Structure the Site</text>
  <text x="110" y="365" font-family="Tahoma,Arial,sans-serif" font-size="11" fill="#6B7280">Tell Claude your business — get sitemap</text>

  <rect x="92" y="380" width="320" height="40" rx="8" fill="#FEF2EE"/>
  <rect x="92" y="380" width="4" height="40" rx="2" fill="#DA7756"/>
  <text x="110" y="397" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="#DA7756">02</text>
  <text x="128" y="397" font-family="Tahoma,Arial,sans-serif" font-size="13" font-weight="700" fill="#111827">Write Copy</text>
  <text x="110" y="413" font-family="Tahoma,Arial,sans-serif" font-size="11" fill="#6B7280">H1 · Services · CTA — Claude writes it</text>

  <rect x="92" y="428" width="320" height="40" rx="8" fill="#FEF2EE"/>
  <rect x="92" y="428" width="4" height="40" rx="2" fill="#DA7756"/>
  <text x="110" y="445" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="#DA7756">03</text>
  <text x="128" y="445" font-family="Tahoma,Arial,sans-serif" font-size="13" font-weight="700" fill="#111827">HTML + CSS</text>
  <text x="110" y="461" font-family="Tahoma,Arial,sans-serif" font-size="11" fill="#6B7280">Responsive · Tailwind · Ready to use</text>

  <rect x="92" y="476" width="320" height="40" rx="8" fill="#FEF2EE"/>
  <rect x="92" y="476" width="4" height="40" rx="2" fill="#DA7756"/>
  <text x="110" y="493" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="#DA7756">04</text>
  <text x="128" y="493" font-family="Tahoma,Arial,sans-serif" font-size="13" font-weight="700" fill="#111827">Deploy on Netlify</text>
  <text x="110" y="509" font-family="Tahoma,Arial,sans-serif" font-size="11" fill="#6B7280">Drag folder — live in 30 sec · Free</text>

  <rect x="92" y="530" width="320" height="48" rx="10" fill="#DCFCE7" stroke="#86EFAC" stroke-width="1"/>
  <text x="252" y="551" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="14" font-weight="700" fill="#16A34A">Website is Live</text>
  <text x="252" y="570" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="11" fill="#16A34A">Low cost · Fast · No coding required</text>

  <!-- Arrow 1 -->
  <line x1="462" y1="385" x2="514" y2="385" stroke="#D1D5DB" stroke-width="2.5" stroke-dasharray="5,4"/>
  <polygon points="514,379 527,385 514,391" fill="#D1D5DB"/>
  <rect x="451" y="362" width="84" height="20" rx="10" fill="#FEF3C7"/>
  <text x="493" y="376" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="#92400E">FAST</text>

  <!-- ===== COL 2: HAS WEBSITE, NO TRAFFIC ===== -->
  <rect x="535" y="130" width="382" height="500" rx="16" fill="white" stroke="#E5E7EB" stroke-width="1.5"/>
  <rect x="535" y="130" width="382" height="6" rx="4" fill="#F59E0B"/>
  <rect x="555" y="141" width="38" height="22" rx="11" fill="#F59E0B"/>
  <text x="574" y="156" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="white">02</text>

  <!-- Browser mockup -->
  <rect x="558" y="162" width="336" height="210" rx="10" fill="#F3F4F6" stroke="#E5E7EB" stroke-width="1"/>
  <rect x="558" y="162" width="336" height="30" rx="10" fill="#E5E7EB"/>
  <rect x="558" y="180" width="336" height="12" fill="#E5E7EB"/>
  <circle cx="577" cy="177" r="5" fill="#EF4444"/>
  <circle cx="593" cy="177" r="5" fill="#F59E0B"/>
  <circle cx="609" cy="177" r="5" fill="#22C55E"/>
  <rect x="626" y="170" width="238" height="16" rx="8" fill="white"/>
  <text x="745" y="182" text-anchor="middle" font-family="monospace,Arial" font-size="9" fill="#9CA3AF">yoursite.netlify.app</text>
  <rect x="566" y="200" width="320" height="164" fill="white"/>
  <rect x="578" y="210" width="170" height="14" rx="3" fill="#E5E7EB"/>
  <rect x="578" y="230" width="120" height="10" rx="3" fill="#F3F4F6"/>
  <rect x="578" y="248" width="85" height="24" rx="5" fill="#0D9488"/>
  <rect x="768" y="208" width="110" height="72" rx="6" fill="#CCFBF1"/>
  <rect x="578" y="292" width="290" height="8" rx="2" fill="#F3F4F6"/>
  <rect x="578" y="306" width="240" height="8" rx="2" fill="#F3F4F6"/>
  <rect x="578" y="322" width="180" height="8" rx="2" fill="#F3F4F6"/>
  <rect x="578" y="340" width="75" height="18" rx="4" fill="#F3F4F6"/>
  <rect x="661" y="340" width="75" height="18" rx="4" fill="#F3F4F6"/>
  <rect x="744" y="340" width="75" height="18" rx="4" fill="#F3F4F6"/>

  <text x="726" y="398" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="18" font-weight="700" fill="#111827">Website is Live</text>
  <rect x="558" y="410" width="300" height="32" rx="8" fill="#FFFBEB" stroke="#FCD34D" stroke-width="1.5"/>
  <text x="708" y="431" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="14" font-weight="700" fill="#92400E">But No One Visits</text>
  <rect x="558" y="452" width="300" height="110" rx="8" fill="#FFF7ED"/>
  <text x="578" y="474" font-family="Tahoma,Arial,sans-serif" font-size="12" fill="#78350F">Google does not know it exists</text>
  <text x="578" y="498" font-family="Tahoma,Arial,sans-serif" font-size="12" fill="#78350F">No keyword strategy</text>
  <text x="578" y="522" font-family="Tahoma,Arial,sans-serif" font-size="12" fill="#78350F">No authority or backlinks</text>
  <text x="578" y="546" font-family="Tahoma,Arial,sans-serif" font-size="12" fill="#78350F">No Local SEO or AI Search signals</text>
  <rect x="558" y="572" width="300" height="46" rx="8" fill="#FEE2E2"/>
  <text x="708" y="591" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" font-weight="700" fill="#DC2626">Organic Traffic</text>
  <text x="708" y="611" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" font-weight="900" fill="#DC2626">0</text>

  <!-- Arrow 2 -->
  <line x1="924" y1="385" x2="980" y2="385" stroke="#0D9488" stroke-width="3"/>
  <polygon points="980,378 994,385 980,392" fill="#0D9488"/>
  <rect x="909" y="362" width="100" height="20" rx="10" fill="#0D9488"/>
  <text x="959" y="376" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="white">SEO STRATEGY</text>

  <!-- ===== COL 3: SEO + TRAFFIC ===== -->
  <rect x="998" y="130" width="382" height="500" rx="16" fill="white" stroke="#E5E7EB" stroke-width="1.5"/>
  <rect x="998" y="130" width="382" height="6" rx="4" fill="#0D9488"/>
  <rect x="1018" y="141" width="38" height="22" rx="11" fill="#0D9488"/>
  <text x="1037" y="156" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="white">03</text>

  <!-- Traffic graph -->
  <rect x="1018" y="160" width="342" height="178" rx="10" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1"/>
  <text x="1033" y="180" font-family="Arial,sans-serif" font-size="10" font-weight="600" fill="#6B7280">ORGANIC TRAFFIC</text>
  <line x1="1025" y1="240" x2="1352" y2="240" stroke="#E5E7EB" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="1025" y1="270" x2="1352" y2="270" stroke="#E5E7EB" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="1025" y1="300" x2="1352" y2="300" stroke="#E5E7EB" stroke-width="0.5" stroke-dasharray="3,3"/>
  <polyline points="1035,325 1090,318 1150,308 1205,285 1260,258 1315,224 1348,195"
    fill="none" stroke="#0D9488" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <polygon points="1035,325 1090,318 1150,308 1205,285 1260,258 1315,224 1348,195 1348,330 1035,330"
    fill="#0D9488" fill-opacity="0.1"/>
  <circle cx="1035" cy="325" r="4" fill="#0D9488"/>
  <circle cx="1150" cy="308" r="4" fill="#0D9488"/>
  <circle cx="1260" cy="258" r="4" fill="#0D9488"/>
  <circle cx="1348" cy="195" r="7" fill="#0D9488"/>
  <circle cx="1348" cy="195" r="4" fill="white"/>
  <rect x="1258" y="168" width="94" height="40" rx="8" fill="white" stroke="#BBF7D0" stroke-width="1"/>
  <text x="1305" y="183" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" fill="#6B7280">Traffic</text>
  <text x="1305" y="202" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" font-weight="900" fill="#16A34A">&#x2191;</text>

  <text x="1189" y="365" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="18" font-weight="700" fill="#111827">SEO Strategy — Visitors Come</text>
  <line x1="1018" y1="378" x2="1360" y2="378" stroke="#F3F4F6" stroke-width="1.5"/>

  <rect x="1018" y="388" width="320" height="38" rx="8" fill="#F0FDF4"/>
  <rect x="1018" y="388" width="4" height="38" rx="2" fill="#0D9488"/>
  <text x="1038" y="404" font-family="Tahoma,Arial,sans-serif" font-size="13" font-weight="700" fill="#111827">SEO — Keyword Strategy</text>
  <text x="1038" y="420" font-family="Tahoma,Arial,sans-serif" font-size="11" fill="#6B7280">On-page + Technical + Backlinks</text>

  <rect x="1018" y="434" width="320" height="38" rx="8" fill="#F0FDF4"/>
  <rect x="1018" y="434" width="4" height="38" rx="2" fill="#0D9488"/>
  <text x="1038" y="450" font-family="Tahoma,Arial,sans-serif" font-size="13" font-weight="700" fill="#111827">Content Marketing</text>
  <text x="1038" y="466" font-family="Tahoma,Arial,sans-serif" font-size="11" fill="#6B7280">Topic cluster that Google trusts</text>

  <rect x="1018" y="480" width="320" height="38" rx="8" fill="#F0FDF4"/>
  <rect x="1018" y="480" width="4" height="38" rx="2" fill="#0D9488"/>
  <text x="1038" y="496" font-family="Tahoma,Arial,sans-serif" font-size="13" font-weight="700" fill="#111827">Local SEO + Google Maps</text>
  <text x="1038" y="512" font-family="Tahoma,Arial,sans-serif" font-size="11" fill="#6B7280">Nearby customers find you first</text>

  <rect x="1018" y="526" width="320" height="38" rx="8" fill="#F0FDF4"/>
  <rect x="1018" y="526" width="4" height="38" rx="2" fill="#0D9488"/>
  <text x="1038" y="542" font-family="Tahoma,Arial,sans-serif" font-size="13" font-weight="700" fill="#111827">GEO — AI Search</text>
  <text x="1038" y="558" font-family="Tahoma,Arial,sans-serif" font-size="11" fill="#6B7280">ChatGPT · Gemini · Perplexity cite you</text>

  <rect x="1018" y="574" width="320" height="44" rx="10" fill="#DCFCE7" stroke="#86EFAC" stroke-width="1"/>
  <text x="1178" y="594" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="14" font-weight="700" fill="#16A34A">Customers Find You on Google</text>
  <text x="1178" y="611" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="11" fill="#16A34A">Organic traffic that grows over time</text>

  <!-- Bottom bar -->
  <rect x="0" y="652" width="1440" height="158" fill="#0D3B38"/>
  <text x="720" y="698" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="20" font-weight="700" fill="white">Claude Execute  •  SEO Strategy  •  Google Traffic</text>
  <text x="720" y="728" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="14" fill="#5EEAD4">Build fast with Claude — then let Saralak Search drive organic traffic through SEO</text>
  <rect x="575" y="746" width="290" height="40" rx="20" fill="#0D9488"/>
  <text x="720" y="771" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="14" font-weight="700" fill="white">Start with Discovery Audit</text>
  <circle cx="1390" cy="710" r="22" fill="#0D9488"/>
  <text x="1390" y="718" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" font-weight="900" fill="white">S</text>
</svg>`;

// Mobile version — single column, portrait flow
const mobileSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="900" viewBox="0 0 800 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hdrM" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0D3B38"/>
      <stop offset="100%" stop-color="#0F4C46"/>
    </linearGradient>
  </defs>
  <rect width="800" height="900" fill="#F9FAFB"/>
  <circle cx="750" cy="60" r="200" fill="#CCFBF1" fill-opacity="0.25"/>
  <circle cx="50" cy="840" r="160" fill="#CCFBF1" fill-opacity="0.2"/>

  <!-- Header -->
  <rect width="800" height="120" fill="url(#hdrM)"/>
  <text x="400" y="55" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="22" font-weight="700" fill="white">Build a Website with Claude</text>
  <text x="400" y="84" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="19" font-weight="700" fill="#5EEAD4">How to Get Visitors</text>
  <circle cx="760" cy="60" r="20" fill="#0D9488"/>
  <text x="760" y="67" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" font-weight="900" fill="white">S</text>

  <!-- Step 1: Claude -->
  <rect x="30" y="140" width="740" height="170" rx="14" fill="white" stroke="#E5E7EB" stroke-width="1.5"/>
  <rect x="30" y="140" width="740" height="5" rx="4" fill="#DA7756"/>
  <rect x="50" y="150" width="34" height="20" rx="10" fill="#DA7756"/>
  <text x="67" y="164" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="white">01</text>
  <circle cx="100" cy="215" r="32" fill="#DA7756"/>
  <text x="100" y="224" text-anchor="middle" font-family="Arial,sans-serif" font-size="26" font-weight="900" fill="white">C</text>
  <text x="148" y="200" font-family="Tahoma,Arial,sans-serif" font-size="16" font-weight="700" fill="#111827">Build Website with Claude</text>
  <text x="148" y="220" font-family="Tahoma,Arial,sans-serif" font-size="12" fill="#6B7280">Structure · Copy · HTML/CSS · Deploy</text>
  <rect x="148" y="234" width="120" height="20" rx="10" fill="#FEF3C7"/>
  <text x="208" y="248" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="600" fill="#92400E">Fast — 1 to 3 Days</text>
  <rect x="50" y="266" width="680" height="30" rx="8" fill="#DCFCE7"/>
  <text x="390" y="286" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="13" font-weight="700" fill="#16A34A">Website is Live — Low cost, No coding required</text>

  <!-- Arrow down 1 -->
  <line x1="400" y1="318" x2="400" y2="360" stroke="#D1D5DB" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="394,358 400,372 406,358" fill="#D1D5DB"/>
  <rect x="354" y="328" width="92" height="18" rx="9" fill="#FEF3C7"/>
  <text x="400" y="341" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="#92400E">FAST</text>

  <!-- Step 2: No traffic -->
  <rect x="30" y="378" width="740" height="180" rx="14" fill="white" stroke="#E5E7EB" stroke-width="1.5"/>
  <rect x="30" y="378" width="740" height="5" rx="4" fill="#F59E0B"/>
  <rect x="50" y="388" width="34" height="20" rx="10" fill="#F59E0B"/>
  <text x="67" y="402" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="white">02</text>
  <text x="400" y="420" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="16" font-weight="700" fill="#111827">Website is Live</text>
  <rect x="200" y="430" width="400" height="28" rx="8" fill="#FFFBEB" stroke="#FCD34D" stroke-width="1.5"/>
  <text x="400" y="449" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="13" font-weight="700" fill="#92400E">But No One Visits</text>
  <text x="60" y="480" font-family="Tahoma,Arial,sans-serif" font-size="12" fill="#78350F">Google does not know it exists   No keyword strategy</text>
  <text x="60" y="502" font-family="Tahoma,Arial,sans-serif" font-size="12" fill="#78350F">No authority or backlinks   No Local SEO or AI Search signals</text>
  <rect x="200" y="518" width="400" height="28" rx="8" fill="#FEE2E2"/>
  <text x="400" y="537" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" font-weight="700" fill="#DC2626">Organic Traffic = 0</text>

  <!-- Arrow down 2 -->
  <line x1="400" y1="566" x2="400" y2="608" stroke="#0D9488" stroke-width="2.5"/>
  <polygon points="394,606 400,620 406,606" fill="#0D9488"/>
  <rect x="338" y="576" width="124" height="18" rx="9" fill="#0D9488"/>
  <text x="400" y="589" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="white">SEO STRATEGY</text>

  <!-- Step 3: SEO + Traffic -->
  <rect x="30" y="626" width="740" height="200" rx="14" fill="white" stroke="#E5E7EB" stroke-width="1.5"/>
  <rect x="30" y="626" width="740" height="5" rx="4" fill="#0D9488"/>
  <rect x="50" y="636" width="34" height="20" rx="10" fill="#0D9488"/>
  <text x="67" y="650" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="white">03</text>
  <text x="400" y="670" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="16" font-weight="700" fill="#111827">SEO Strategy — Visitors Come</text>
  <rect x="50" y="682" width="324" height="36" rx="8" fill="#F0FDF4"/>
  <rect x="50" y="682" width="4" height="36" rx="2" fill="#0D9488"/>
  <text x="70" y="698" font-family="Tahoma,Arial,sans-serif" font-size="12" font-weight="700" fill="#111827">SEO — Keyword Strategy</text>
  <text x="70" y="712" font-family="Tahoma,Arial,sans-serif" font-size="10" fill="#6B7280">On-page + Technical + Backlinks</text>
  <rect x="390" y="682" width="324" height="36" rx="8" fill="#F0FDF4"/>
  <rect x="390" y="682" width="4" height="36" rx="2" fill="#0D9488"/>
  <text x="410" y="698" font-family="Tahoma,Arial,sans-serif" font-size="12" font-weight="700" fill="#111827">Content Marketing</text>
  <text x="410" y="712" font-family="Tahoma,Arial,sans-serif" font-size="10" fill="#6B7280">Topic cluster Google trusts</text>
  <rect x="50" y="726" width="324" height="36" rx="8" fill="#F0FDF4"/>
  <rect x="50" y="726" width="4" height="36" rx="2" fill="#0D9488"/>
  <text x="70" y="742" font-family="Tahoma,Arial,sans-serif" font-size="12" font-weight="700" fill="#111827">Local SEO + Google Maps</text>
  <text x="70" y="756" font-family="Tahoma,Arial,sans-serif" font-size="10" fill="#6B7280">Nearby customers find you first</text>
  <rect x="390" y="726" width="324" height="36" rx="8" fill="#F0FDF4"/>
  <rect x="390" y="726" width="4" height="36" rx="2" fill="#0D9488"/>
  <text x="410" y="742" font-family="Tahoma,Arial,sans-serif" font-size="12" font-weight="700" fill="#111827">GEO — AI Search</text>
  <text x="410" y="756" font-family="Tahoma,Arial,sans-serif" font-size="10" fill="#6B7280">ChatGPT · Gemini · Perplexity cite you</text>
  <rect x="50" y="772" width="664" height="36" rx="10" fill="#DCFCE7"/>
  <text x="382" y="795" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="13" font-weight="700" fill="#16A34A">Customers Find You on Google — Traffic grows over time</text>

  <!-- Bottom -->
  <rect x="0" y="840" width="800" height="60" fill="#0D3B38"/>
  <text x="400" y="866" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="12" font-weight="700" fill="white">Claude Execute  •  SEO Strategy  •  Google Traffic</text>
  <text x="400" y="884" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="10" fill="#5EEAD4">Saralak Search — Discovery Audit</text>
</svg>`;

async function generate() {
  await sharp(Buffer.from(desktopSvg))
    .png()
    .toFile(`${OUT}/tham-web-claude-banner-web.png`);
  console.log('Desktop done');

  await sharp(Buffer.from(mobileSvg))
    .png()
    .toFile(`${OUT}/tham-web-claude-banner-mweb.png`);
  console.log('Mobile done');
}

generate().catch(e => { console.error(e); process.exit(1); });

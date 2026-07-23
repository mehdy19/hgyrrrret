/* =========================================================
   دليل الحسابات الاجتماعية في القانون الجزائري — دليل تفاعلي
   المصدر: مكتب Oathentiq للاستشارات القانونية (oathentiq.com)
   يُستخدم في صفحة comptes.html فقط
   ========================================================= */

const steps = {

  definition: {
    title: "ما هي الحسابات الاجتماعية؟",
    num: 1,
    banner: {
      eyebrow: "الشريحة الثانية",
      ref: ""
    },
    bannerClass: "axis-teal",
    content: `
    <p>هي إجراء قانوني يهدف إلى نشر معلومات مالية خاصة بالشركات التجارية لإطلاع الغير (موردين، زبائن، بنوك ومستثمرين) على وضعيتها الحقيقية. تتكون محاسبياً من:</p>
    <div class="law-grid cols-2">
      <div class="law-card">
        <h3><span class="num-badge">01</span>جدول الأصول</h3>
        <p>الميزانية العمومية للأصول.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">02</span>جدول الخصوم</h3>
        <p>الالتزامات وحقوق الملكية.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">03</span>جدول حساب النتائج</h3>
        <p>الأرباح والخسائر السنوية.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">04</span>محضر الجمعية العامة</h3>
        <p>المصادقة على الحسابات.</p>
      </div>
    </div>
    <div class="note">★ الشفافية المالية = ثقة الشركاء والمستثمرين</div>
    `,
    next: "legalRef"
  },

  legalRef: {
    title: "المرجع القانوني",
    num: 2,
    banner: {
      eyebrow: "الشريحة الثالثة",
      ref: ""
    },
    bannerClass: "axis-navy",
    content: `
    <p>يستند الالتزام بإيداع الحسابات الاجتماعية إلى ترسانة قانونية قوية تشمل النصوص التالية:</p>
    <div class="law-grid cols-2">
      <div class="law-card">
        <h3><span class="num-badge">§</span>القانون التجاري · المادة 717</h3>
        <p>تفرض الإيداع كإشهار قانوني إلزامي.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">§</span>القانون 04-08</h3>
        <p>المتعلق بشروط ممارسة الأنشطة التجارية.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">§</span>القانون النقدي والمصرفي 23-09</h3>
        <p>الخاص بالبنوك والمؤسسات المالية.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">§</span>المرسوم التنفيذي 92-70</h3>
        <p>النشرة الرسمية للإعلانات القانونية (BOAL).</p>
      </div>
    </div>
    <div class="note">★ الإيداع واجب قانوني وليس خياراً إدارياً</div>
    `,
    next: "concerned"
  },

  concerned: {
    title: "من هم المعنيون بالإيداع؟",
    num: 3,
    banner: {
      eyebrow: "الشريحة الرابعة",
      ref: ""
    },
    bannerClass: "axis-teal",
    content: `
    <p>يجب على كل شركة تجارية تتمتع بـ <b>الشخصية المعنوية</b> القيام بهذا الإجراء، وتشمل:</p>
    <div class="law-grid cols-2">
      <div class="law-card">
        <h3><span class="num-badge">01</span>شركات المساهمة (SPA)</h3>
        <p>الشركات الكبرى المفتوحة رأس المال.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">02</span>SARL · EURL</h3>
        <p>ذات المسؤولية المحدودة ومؤسسات الشخص الوحيد.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">03</span>شركات التضامن (SNC)</h3>
        <p>الشركات ذات الاسم الجماعي.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">04</span>SCS / SCA</h3>
        <p>شركات التوصية البسيطة أو بالأسهم.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">05</span>البنوك والمؤسسات المالية</h3>
        <p>وفروع البنوك الأجنبية المتواجدة في الجزائر.</p>
      </div>
    </div>
    <div class="note">★ كل شركة ذات شخصية معنوية معنية بالإيداع</div>
    `,
    next: "exempted"
  },

  exempted: {
    title: "المستثنون من الإيداع",
    num: 4,
    banner: {
      eyebrow: "الشريحة الخامسة",
      ref: ""
    },
    bannerClass: "axis-gold",
    content: `
    <p>حدد القانون فئات لا تخضع لهذا الالتزام أو <b>معفاة منه مؤقتاً</b>:</p>
    <div class="law-grid cols-2">
      <div class="law-card">
        <h3><span class="num-badge">01</span>الشركات حديثة التسجيل</h3>
        <p>تُعفى في سنتها الأولى من القيد في السجل التجاري.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">02</span>فروع الشركات الأجنبية</h3>
        <p>المتواجدة في الجزائر.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">03</span>تجمعات الشركات</h3>
        <p>والمؤسسات العمومية البلدية والولائية.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">!</span>حالة خاصة · CNAC / NESDA</h3>
        <p>تُعفى من دفع حقوق الإيداع لمدة 3 سنوات، لكنها ملزمة بالإجراء.</p>
      </div>
    </div>
    <div class="note">★ الإعفاء من الرسوم لا يعفي من الإجراء القانوني</div>
    `,
    next: "procedure"
  },

  procedure: {
    title: "كيفيات التصريح · أين ومتى؟",
    num: 5,
    banner: {
      eyebrow: "الشريحة السادسة",
      ref: ""
    },
    bannerClass: "axis-navy",
    content: `
    <div class="law-grid cols-2">
      <div class="law-card">
        <h3>📅 موعد الجمعية</h3>
        <p>يجب انعقادها خلال <b>6 أشهر</b> من قفل السنة المالية (قبل 30 جوان).</p>
      </div>
      <div class="law-card">
        <h3>⏱ الآجال</h3>
        <p>خلال <b>شهر واحد</b> يلي تاريخ انعقاد الجمعية العامة للمصادقة على الحسابات.</p>
      </div>
      <div class="law-card">
        <h3>⌖ الجهة المختصة</h3>
        <p>تودع الحسابات لدى الفرع المحلي لـ <b>المركز الوطني للسجل التجاري (CNRC)</b> المختص إقليمياً. كما يمكن الإيداع ودفع الحقوق عن بعد عبر منصة سجلكم.</p>
      </div>
    </div>
    <div class="note" style="background:#fdeaea;color:#b3261e;">⚠ الموعد النهائي لإيداع الحسابات الاجتماعية: 30 جويلية من كل سنة</div>
    <div class="note">★ احترام الآجال = تجنب العقوبات المالية</div>
    `,
    next: "documents"
  },

  documents: {
    title: "الوثائق المطلوبة للإيداع",
    num: 6,
    banner: {
      eyebrow: "الشريحة السابعة",
      ref: ""
    },
    bannerClass: "axis-navy",
    content: `
    <p>لإتمام العملية، يجب تقديم نسخة من الوثائق التالية <b>باللغتين العربية والفرنسية</b>:</p>
    <div class="law-grid cols-2">
      <div class="law-card">
        <h3><span class="num-badge">01</span>محضر الجمعية العامة العادية</h3>
        <p>المصادقة على الحسابات السنوية.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">02</span>جدول أصول الميزانية</h3>
        <p>Actif du bilan</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">03</span>جدول خصوم الميزانية</h3>
        <p>Passif du bilan</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">04</span>جدول حساب النتائج</h3>
        <p>TCR · Tableau des comptes de résultat</p>
      </div>
    </div>
    <div class="info-block">
      <p>🏦 <b>للبنوك:</b> جداول خارج الميزانية، تدفقات الخزينة، وتغير الأموال الخاصة · الإيداع الإلكتروني متاح عبر بوابة CNRC.</p>
    </div>
    <div class="note">★ وثائقك جاهزة؟ ابدأ الإيداع قبل فوات الأجل</div>
    `,
    next: "penalties"
  },

  penalties: {
    title: "العقوبات المالية",
    num: 7,
    banner: {
      eyebrow: "الشريحة الثامنة",
      ref: ""
    },
    bannerClass: "axis-red",
    content: `
    <p>يؤدي عدم الالتزام بالإيداع في الآجال المحددة إلى <b>عقوبات صارمة</b>:</p>
    <div class="law-grid cols-2">
      <div class="law-card">
        <h3>₣ غرامة مالية</h3>
        <p>تتراوح بين <b>30,000 دج و 300,000 دج</b> حسب المادة 35 من القانون 04-08.</p>
      </div>
      <div class="law-card">
        <h3>§ عقوبات البنوك</h3>
        <p>تصل إلى الحبس (1-3 سنوات) وغرامات تصل إلى 10 ملايين دج للمسيّرين المخالفين.</p>
      </div>
      <div class="law-card">
        <h3>⚖ تسوية الوضعية</h3>
        <p>يمكن تسوية الوضعية بدفع غرامة الصلح لتجنب المتابعة القضائية.</p>
      </div>
    </div>
    <div class="note" style="background:#fdeaea;color:#b3261e;">⚠ التأخر عن الإيداع يعرض شركتك لغرامات تصل إلى 300,000 دج</div>
    <div class="note">★ الالتزام بالآجال يحمي شركتك من العقوبات</div>
    `,
    next: "blacklist"
  },

  blacklist: {
    title: "البطاقية الوطنية لمرتكبي الغش",
    num: 8,
    banner: {
      eyebrow: "الشريحة التاسعة · عقوبة تكميلية",
      ref: ""
    },
    bannerClass: "axis-red",
    content: `
    <p>تعتبر <b>أخطر عقوبة تكميلية</b>، حيث يتم إدراج الشركة المخالفة في البطاقية الوطنية لمرتكبي أعمال الغش، مما يترتب عليه:</p>
    <div class="law-grid cols-2">
      <div class="law-card">
        <h3>✕ الاستبعاد من الامتيازات</h3>
        <p>الجبائية والجمركية وترقية الاستثمار.</p>
      </div>
      <div class="law-card">
        <h3>✕ الحرمان من الصفقات العمومية</h3>
        <p>المنع من المشاركة في المناقصات الحكومية.</p>
      </div>
      <div class="law-card">
        <h3>✕ منع التجارة الخارجية</h3>
        <p>المنع من ممارسة عمليات الاستيراد والتصدير.</p>
      </div>
      <div class="law-card">
        <h3>✕ فقدان التسهيلات الإدارية</h3>
        <p>الممنوحة من الإدارات الجبائية والتجارية.</p>
      </div>
    </div>
    <div class="note" style="background:#fdeaea;color:#b3261e;">⚠ السمعة التجارية لشركتك على المحك — الإدراج في البطاقية = خسارة فادحة</div>
    <div class="note">★ الالتزام بالآجال القانونية يحمي سمعة شركتك واستمراريتها</div>
    `,
    next: "closing"
  },

  closing: {
    title: "خلاصة الدليل",
    num: 9,
    isFinal: true,
    content: `
    <div class="closing-card">
      <p>بهذا تكون قد اطّلعت على أبرز التزامات الشركات التجارية في الجزائر بخصوص إيداع الحسابات الاجتماعية، وفق القانون التجاري والقانون 04-08 والمراسيم التنظيمية.</p>
      <p>لمزيد من المعلومات القانونية، يمكنك زيارة موقع <b>Oathentiq</b> الإلكتروني.</p>
      <a class="btn btn-primary" href="https://oathentiq.com" target="_blank" rel="noopener">→ زيارة OATHENTIQ.COM</a>
    </div>
    `
  }
};

const totalStagesEstimate = 9;

/* ============ STATE ============ */
let history = [];
let current = "definition";

const cardEl = document.getElementById("card");
const railEl = document.getElementById("rail");
const stageLabelEl = document.getElementById("stageLabel");

function buildRail(){
  railEl.innerHTML = "";
  const segCount = totalStagesEstimate;
  for(let i=0;i<segCount;i++){
    const s = document.createElement("div");
    s.className = "seg";
    railEl.appendChild(s);
  }
}
buildRail();

function updateRail(num){
  const segs = railEl.querySelectorAll(".seg");
  const filled = num;
  segs.forEach((s,i)=> s.classList.toggle("done", i < filled));
}

function render(id){
  const step = steps[id];
  current = id;
  updateRail(step.num || 1);
  stageLabelEl.innerHTML = `المحور <b>${step.num || 1}</b> من ${totalStagesEstimate}`;

  let html = "";
  if(step.isFinal){
    html += `<div class="end-badge">🎉 اطّلعت على كل المحاور</div>`;
  }
  if(step.banner){
    html += `<div class="axis-banner ${step.bannerClass || 'axis-teal'}">
      <div class="axis-eyebrow">${step.banner.eyebrow}</div>
      <h2>${step.title}</h2>
      ${step.banner.ref ? `<span class="axis-ref">★ ${step.banner.ref}</span>` : ""}
    </div>`;
  } else {
    html += `<h2 class="card-title"><span class="step-num">${step.num || "•"}</span>${step.title}</h2>`;
  }
  html += `<div class="content">${step.content}</div>`;

  html += `<div class="nav-row">
    <button class="btn btn-ghost" id="backBtn" ${history.length===0 ? "disabled":""}>المحور السابق</button>
    ${step.isFinal ? "" : `<button class="btn btn-primary" id="nextBtn">المحور التالي ←</button>`}
  </div>`;

  cardEl.innerHTML = html;

  const backBtn = document.getElementById("backBtn");
  if(backBtn) backBtn.addEventListener("click", goBack);

  const nextBtn = document.getElementById("nextBtn");
  if(nextBtn) nextBtn.addEventListener("click", ()=> goTo(step.next));
}

function goTo(id){
  history.push(current);
  render(id);
  window.scrollTo({top:0, behavior:"smooth"});
}

function goBack(){
  if(history.length === 0) return;
  const prev = history.pop();
  render(prev);
  window.scrollTo({top:0, behavior:"smooth"});
}

const restartBtn = document.getElementById("restartBtn");
if(restartBtn){
  restartBtn.addEventListener("click", ()=>{
    history = [];
    render("definition");
    window.scrollTo({top:0, behavior:"smooth"});
  });
}

const startBtn = document.getElementById("startBtn");
if(startBtn){
  startBtn.addEventListener("click", ()=>{
    document.getElementById("introScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    render("definition");
    window.scrollTo({top:0, behavior:"smooth"});
  });
}

/* =========================================================
   التزامات المستخدم في التشريع الجزائري — دليل تفاعلي
   المصدر: مكتب Oathentiq للاستشارات القانونية (oathentiq.com)
   يُستخدم في صفحة iltizamat.html فقط
   ========================================================= */

const steps = {

  wages: {
    title: "التزامات الأجور والحماية المالية",
    num: 1,
    banner: {
      eyebrow: "المحور الأول · الأجور",
      ref: "المرجع: القانون 90-11"
    },
    bannerClass: "axis-teal",
    content: `
    <div class="law-grid cols-2">
      <div class="law-card">
        <h3><span class="num-badge">01</span>دفع الأجر بانتظام</h3>
        <p>الالتزام بصرف الرواتب عند حلول أجل استحقاقها بصفة دورية.</p>
        <span class="law-tag">★ المادة 88</span>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">02</span>احترام الحد الأدنى للأجور</h3>
        <p>منع دفع مبالغ أقل من <b>الأجر الوطني الأدنى المضمون (SNMG)</b>.</p>
        <span class="law-tag">★ المادة 87</span>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">03</span>تسليم قسيمة الراتب</h3>
        <p>وجوب تسليم كشف راتب دوري يوضح كافة عناصر الأجر والاقتطاعات بالتسمية.</p>
        <span class="law-tag">★ المادة 86</span>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">04</span>ضمان المساواة</h3>
        <p>الالتزام بمبدأ <b>أجر متساوٍ لعمل ذي قيمة متساوية</b> دون تمييز.</p>
        <span class="law-tag">★ المادة 84</span>
      </div>
    </div>
    <div class="note">★ الأجر = حق قانوني — الالتزام بآجاله وحدّه الأدنى ضمان للكرامة</div>
    `,
    next: "workenv"
  },

  workenv: {
    title: "التزامات بيئة العمل والتنظيم",
    num: 2,
    banner: {
      eyebrow: "المحور الثاني · بيئة العمل",
      ref: "المرجع: القانون 90-11"
    },
    bannerClass: "axis-navy",
    content: `
    <div class="law-grid cols-2">
      <div class="law-card">
        <h3><span class="num-badge">01</span>النظام الداخلي</h3>
        <p>إعداد وثيقة مكتوبة تحدد القواعد التقنية والصحة والانضباط في المؤسسات التي تشغل <b>20 عاملاً فأكثر</b>.</p>
        <span class="law-tag">★ المادة 75</span>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">02</span>كرامة العامل وسلامته</h3>
        <p>توفير ظروف عمل تضمن <b>السلامة البدنية والمعنوية</b> واحترام الكرامة.</p>
        <span class="law-tag">★ المادة 6</span>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">03</span>أوقات العمل</h3>
        <p>الالتزام بالمدة القانونية المحددة بـ <b>40 ساعة أسبوعياً</b>.</p>
        <span class="law-tag">★ المادة 22</span>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">04</span>التكوين والترقية</h3>
        <p>مباشرة أعمال التكوين وتحسين المستوى المهني للعمال.</p>
        <span class="law-tag">★ المادة 57</span>
      </div>
    </div>
    <div class="note">★ بيئة عمل منظمة = إنتاجية أعلى + علاقات عمل مستقرة</div>
    `,
    next: "inspection"
  },

  inspection: {
    title: "الالتزام تجاه مفتشية العمل",
    num: 3,
    banner: {
      eyebrow: "المحور الثالث · مفتشية العمل",
      ref: ""
    },
    bannerClass: "axis-gold",
    content: `
    <div class="info-block">
      <div class="info-label">الإدارة المختصة</div>
      <div class="info-title">⚖️ مفتشية العمل المختصة إقليمياً</div>
      <p><b>الغرض:</b> الرقابة على تطبيق التشريع وضمان ظروف الصحة والأمن والوقاية.</p>
      <div class="note" style="margin-bottom:10px;">★ كيفية الالتزام:</div>
      <div class="check-list">
        <div class="check-item"><span class="law-tag">المادة 156 · 90-11</span> وضع السجلات القانونية تحت تصرف المفتش عند كل طلب.</div>
        <div class="check-item"><span class="law-tag">المادة 79 · 90-11</span> إيداع نسخة من النظام الداخلي للمصادقة على مطابقته للقانون.</div>
      </div>
    </div>
    <div class="note">★ التعاون مع مفتشية العمل = حماية قانونية للمؤسسة والعمال</div>
    `,
    next: "cnas"
  },

  cnas: {
    title: "الالتزام تجاه صندوق الضمان الاجتماعي (CNAS)",
    num: 4,
    banner: {
      eyebrow: "المحور الرابع · الضمان الاجتماعي",
      ref: ""
    },
    bannerClass: "axis-teal",
    content: `
    <div class="info-block">
      <div class="info-label">الإدارة المختصة</div>
      <div class="info-title">🏥 الصندوق الوطني للتأمينات الاجتماعية للعمال الأجراء</div>
      <p><b>الغرض:</b> ضمان التغطية الصحية والاجتماعية وحماية العمال من حوادث العمل.</p>
      <div class="note" style="margin-bottom:10px;">★ كيفية الالتزام:</div>
      <div class="check-list">
        <div class="check-item"><span class="law-tag">المادة 10 · قانون 83-14</span> التصريح بالنشاط خلال 10 أيام من بدايته.</div>
        <div class="check-item"><span class="law-tag">المادة 10 · قانون 83-14</span> التصريح بانتساب العمال الجدد في أجل 10 أيام من تاريخ تشغيلهم.</div>
        <div class="check-item">اقتطاع حصة العامل (9%) وتحويلها مع حصة المستخدم بانتظام.</div>
        <div class="check-item">دفع الاشتراكات الفصلية أو الشهرية حسب الحالة عبر التصريح <b>DAC</b>.</div>
        <div class="check-item">إيداع <b>التصريح السنوي للأجور DAS</b> المتضمن معلومات العمال الصحيحة مع تدوين أجورهم وفترات العمل.</div>
      </div>
    </div>
    <div class="note">★ التأخر عن التصريح لـ CNAS = غرامات وعقوبات قانونية</div>
    `,
    next: "tax"
  },

  tax: {
    title: "الالتزام تجاه إدارة الضرائب والمحكمة",
    num: 5,
    banner: {
      eyebrow: "المحور الخامس · الضرائب والمحكمة",
      ref: ""
    },
    bannerClass: "axis-navy",
    content: `
    <div class="law-grid">
      <div class="law-card">
        <h3><span class="num-badge">01</span>إدارة الضرائب</h3>
        <p>اقتطاع الضريبة على الدخل الإجمالي <b>(IRG)</b> من المنبع وتحويلها لمصالح الضرائب.</p>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">02</span>كتابة ضبط المحكمة</h3>
        <p>إيداع نسخة من النظام الداخلي لتسجيله وضمان نفاذه القانوني.</p>
        <span class="law-tag">★ المادة 79 · 90-11</span>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">03</span>الاتفاقيات الجماعية</h3>
        <p>إيداع الاتفاقيات الجماعية فور إبرامها لدى <b>مفتشية العمل والمحكمة المختصة</b>.</p>
        <span class="law-tag">★ المادة 126 · 90-11</span>
      </div>
    </div>
    <div class="note">★ الإيداع القانوني = نفاذ الاتفاقيات وحماية الطرفين</div>
    `,
    next: "registers"
  },

  registers: {
    title: "مسك السجلات الإلزامية (مرسوم 96-98)",
    num: 6,
    banner: {
      eyebrow: "المحور السادس · السجلات الإلزامية",
      ref: "المادة 1 من المرسوم"
    },
    bannerClass: "axis-teal",
    content: `
    <div class="info-block">
      <p>يجب على كل مستخدم مسك <b>7 سجلات قانونية</b> مرقمة ومؤشر عليها.</p>
      <div class="note" style="margin-bottom:10px;">★ أبرز السجلات:</div>
      <div class="doc-list">
        <div class="item">👥 سجل العمال</div>
        <div class="item">🚨 سجل حوادث العمل</div>
        <div class="item">🏖️ سجل العطل السنوية</div>
        <div class="item">⚠️ سجل إنذارات مفتشية العمل</div>
        <div class="item">💵 دفتر الأجور</div>
      </div>
      <div class="note">★ التصديق: يوقّع القاضي <b>دفتر الأجور</b> فقط، بينما تُؤشر باقي السجلات من طرف مفتش العمل المختص إقليمياً.</div>
      <div class="note">⚠️ ملاحظة: حسب الحالة، يمكن مسك سجلات إضافية — مثال: سجل الأجانب عند تشغيل عمال أجانب.</div>
      <div class="note"><span class="law-tag">★ المادة 17 من المرسوم</span>&nbsp; مدة الحفظ: <b>10 سنوات</b> — يجب الاحتفاظ بهذه السجلات لمدة 10 سنوات من تاريخ اختتامها.</div>
    </div>
    <div class="note">★ السجلات المرقمة المؤشر عليها = دليل قانوني يحمي صاحب العمل</div>
    `,
    next: "protection"
  },

  protection: {
    title: "حماية العمال وضوابط الإنهاء",
    num: 7,
    banner: {
      eyebrow: "المحور السابع · الحماية والإنهاء",
      ref: "المرجع: القانون 90-11"
    },
    bannerClass: "axis-red",
    content: `
    <div class="law-grid cols-2">
      <div class="law-card">
        <h3><span class="num-badge">01</span>حماية الأجر</h3>
        <p>منع حجز الأجور أو اقتطاعها مهما كان السبب باستثناء الحالات القانونية.</p>
        <span class="law-tag">★ المادة 90</span>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">02</span>استمرارية العقود</h3>
        <p>تغيير الوضعية القانونية للمؤسسة لا ينهي علاقات العمل بل <b>تنتقل للمستخدم الجديد</b>.</p>
        <span class="law-tag">★ المادة 74</span>
      </div>
      <div class="law-card">
        <h3><span class="num-badge">03</span>غرامات المخالفة</h3>
        <p>أي إخلال بالتزامات الأجور أو السجلات يعرض صاحب العمل لـ <b>غرامات مالية مشددة</b>.</p>
        <span class="law-tag">★ المادة 145 وما يليها</span>
      </div>
    </div>
    <div class="note">★ احترام القانون = تجنب الغرامات وحماية سمعة المؤسسة</div>
    `,
    next: "closing"
  },

  closing: {
    title: "خلاصة الدليل",
    num: 8,
    isFinal: true,
    content: `
    <div class="closing-card">
      <p>بهذا تكون قد اطّلعت على أبرز التزامات المستخدم في التشريع الجزائري، وفق القانون 90-11 والمراسيم التنظيمية.</p>
      <p>لمزيد من المعلومات القانونية، يمكنك زيارة موقع <b>Oathentiq</b> الإلكتروني.</p>
      <a class="btn btn-primary" href="https://oathentiq.com" target="_blank" rel="noopener">→ زيارة OATHENTIQ.COM</a>
    </div>
    `
  }
};

const totalStagesEstimate = 8;

/* ============ STATE ============ */
let history = [];
let current = "wages";

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
    render("wages");
    window.scrollTo({top:0, behavior:"smooth"});
  });
}

const startBtn = document.getElementById("startBtn");
if(startBtn){
  startBtn.addEventListener("click", ()=>{
    document.getElementById("introScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    render("wages");
    window.scrollTo({top:0, behavior:"smooth"});
  });
}

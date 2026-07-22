/* =========================================================
   دليل تمويل المشاريع عبر NESDA و CDE — منطق المسار التفاعلي
   يُستخدم في صفحة tamwil.html فقط
   ========================================================= */

/* ============ DATA: step graph ============ */
const steps = {

  idea_check: {
    title: "هل لديك فكرة مشروع؟",
    num: 1,
    content: `<p>أول خطوة هي تحديد وضعيتك قبل التسجيل.</p>`,
    choices: [
      { label:"نعم، عندي فكرة مشروع", sub:"سجّل مباشرة في دورة CDE", next:"cde_direct" },
      { label:"لا، ليس لدي فكرة بعد", sub:"ابدأ بدورة إيجاد الفكرة في NESDA", next:"nesda_3days" },
    ]
  },

  cde_direct: {
    title:"التسجيل المباشر في CDE",
    num:2,
    content:`<p>بما أن لديك فكرة مشروع، تسجّل مباشرة في <b>CDE</b> في دورة تدريبية مدتها <b>15 يوم</b>.</p>`,
    next:"suppliers"
  },

  nesda_3days:{
    title:"دورة إيجاد الفكرة",
    num:2,
    content:`<p>تسجّل في دورة <b>"أوجد فكرتك"</b> لدى NESDA، ومدتها <b>3 أيام</b>.</p>
    <p>بعد إتمامها تلتحق مباشرة بدورة <b>CDE</b> (15 يوم).</p>`,
    next:"suppliers"
  },

  suppliers:{
    title:"التواصل مع الموردين",
    num:3,
    content:`<p>أثناء دورة CDE، عليك التواصل مع موردين للعتاد الذي يحتاجه مشروعك، وطلب <b>فاتورة شكلية</b> للعتاد.</p>
    <div class="note">الفاتورة الشكلية تُمنح <b>مجانًا وبدون مقابل</b>.</div>`,
    next:"invoice_requirements"
  },

  invoice_requirements:{
    title:"شروط الفاتورة الشكلية",
    num:4,
    content:`<p>تأكد أن المعلومات التالية موجودة في الفاتورة:</p>
    <div class="doc-list">
      <div class="item">رقم السجل التجاري (RC)</div>
      <div class="item">رقم التعريف الضريبي (NIF)</div>
      <div class="item">رقم التعريف الإحصائي (NIS)</div>
      <div class="item">التوقيع والختم</div>
      <div class="item">ختم "TVA NON INCLUS" في حالة كان المورد يتبع النظام الضريبي الجزافي</div>
    </div>`,
    next:"supplier_verify"
  },

  supplier_verify:{
    title:"التحقق من مطابقة المورد",
    num:5,
    content:`<p>توجّه إلى أقرب فرع <b>NESDA</b> للتأكد من أن المورد مطابق للشروط، وبإمكانك حينها التعامل معه بشكل عادي.</p>`,
    next:"insurance"
  },

  insurance:{
    title:"فاتورة تأمين العتاد",
    num:6,
    content:`<p>بعد التأكد من مطابقة المورد، توجّه إلى أي وكالة تأمين مرفقًا بالفاتورة الشكلية للعتاد، حتى تتحصّل على <b>فاتورة التأمين الشكلية</b> للعتاد.</p>`,
    next:"study_intro"
  },

  study_intro:{
    title:"إعداد دراسة المشروع",
    num:7,
    content:`<p>بعد الحصول على جميع الفواتير الشكلية، تصل إلى مرحلة إعداد دراسة المشروع. تتكوّن الدراسة من الملفات التالية:</p>
    <div class="doc-list">
      <div class="item">مخطط الأعمال للمشروع في شكل Excel</div>
      <div class="item">الدراسة التقنية الاقتصادية للمشروع</div>
      <div class="item">دراسة الجدوى</div>
      <div class="item">نموذج العمل التجاري (BMC)</div>
    </div>`,
    next:"tax_choice"
  },

  tax_choice:{
    title:"اختيار النظام الضريبي",
    num:8,
    content:`<p>قبل البدء في الدراسة، عليك الاختيار بين نظامين ضريبيين، لأن ذلك يحدد كيف تُبنى الدراسة على أسعار العتاد.</p>`,
    choices:[
      { label:"النظام الضريبي الجزافي", sub:"الدراسة تُبنى على السعر شامل الضريبة (TTC)", next:"tax_forfait" },
      { label:"النظام الضريبي الحقيقي", sub:"الدراسة تُبنى على السعر غير شامل الضريبة (HT)", next:"tax_reel" },
    ]
  },

  tax_forfait:{
    title:"النظام الجزافي — TTC",
    num:9,
    content:`<p>تبني كل الدراسة على أسعار العتاد بالسعر الإجمالي <b>المتضمن</b> الضريبة على القيمة المضافة (TTC).</p>`,
    next:"study_review"
  },

  tax_reel:{
    title:"النظام الحقيقي — HT",
    num:9,
    content:`<p>تبني كل الدراسة على أسعار العتاد بالسعر الإجمالي <b>غير المتضمن</b> الضريبة على القيمة المضافة (HT)، لأنك ستستفيد من إعفاء على ضريبة القيمة المضافة (TVA).</p>`,
    next:"study_review"
  },

  study_review:{
    title:"مراجعة الدراسة",
    num:10,
    content:`<p>بعد إتمام الدراسة، توجّه بها مرفقة بالفواتير الشكلية إلى <b>المرافق الرئيسي</b> في وكالة NESDA لعمل محاكاة وتدقيق للدراسة.</p>
    <ul>
      <li>إذا أعطاك المرافق الموافقة → توجّه إلى فرع NESDA الأقرب إلى مقر إقامتك لإيداع الملف.</li>
      <li>إذا كانت هناك تعديلات → قم بتعديلها وانتظر موافقة المرافق الرئيسي قبل الإيداع.</li>
    </ul>`,
    next:"legal_form_choice"
  },

  legal_form_choice:{
    title:"الشكل القانوني للمشروع",
    num:11,
    content:`<p>عند إيداع الملف على مستوى فرع وكالة NESDA، هناك مساران بحسب الشكل القانوني لمشروعك.</p>`,
    choices:[
      { label:"شخص طبيعي", sub:"مشروع فردي باسمك الشخصي", next:"np_file" },
      { label:"شخص معنوي (شركة)", sub:"إنشاء شركة", next:"comp_name" },
    ]
  },

  /* ---- natural person branch ---- */
  np_file:{
    title:"ملف الإيداع — شخص طبيعي",
    num:12,
    content:`<p>ترفق الملف التالي وتودعه كاملًا على مستوى فرع الوكالة مع التسجيل في منصة NESDA:</p>
    <div class="doc-list">
      <div class="item">مخطط الأعمال (Excel)</div>
      <div class="item">الدراسة التقنية الاقتصادية</div>
      <div class="item">دراسة الجدوى</div>
      <div class="item">نموذج العمل التجاري (BMC)</div>
      <div class="item">الفواتير الشكلية للعتاد</div>
      <div class="item">الفواتير الشكلية للتأمين على العتاد</div>
      <div class="item">شهادة تخرج او اثبات المستوى</div>
      <div class="item">شهادة اتمام دورة CDE</div>
      <div class="item">ملف إداري: شهادة ميلاد، نسخة بطاقة التعريف الوطني، شهادة إقامة، صورتان شمسيتان</div>
    </div>
    <div class="note">المشاريع التي يفوق فيها حجم الاستثمار <b>8 مليون دج</b> تُرسل إلى المديرية العامة في الجزائر العاصمة لمعالجتها.</div>`,
    next:"committee_wait"
  },

  /* ---- company branch ---- */
  comp_name:{
    title:"حجز التسمية التجارية",
    num:12,
    content:`<p>توجّه إلى الفرع المحلي للمركز الوطني للسجل التجاري (CNRC) أو استخدم منصة <b>سجيلكوم</b> الإلكترونية لحجز اسم فريد لشركتك، مع التأكد من عدم تشابهه مع شركات أخرى.</p>`,
    next:"comp_file"
  },

  comp_file:{
    title:"ملف الإيداع — شركة",
    num:13,
    content:`<p>بعد الحصول على التسمية، ترفق الملف التالي وتودعه كاملًا على مستوى فرع الوكالة مع التسجيل في منصة NESDA:</p>
    <div class="doc-list">
      <div class="item">مخطط الأعمال (Excel)</div>
      <div class="item">الدراسة التقنية الاقتصادية</div>
      <div class="item">دراسة الجدوى</div>
      <div class="item">نموذج العمل التجاري (BMC)</div>
      <div class="item">التسمية التجارية المحجوزة للشركة</div>
      <div class="item">الفواتير الشكلية للعتاد</div>
      <div class="item">الفواتير الشكلية للتأمين على العتاد</div>
      <div class="item">شهادة تخرج او اثبات المستوى</div>
      <div class="item">شهادة اتمام دورة CDE</div>      
      <div class="item">ملف إداري: شهادة ميلاد، نسخة بطاقة التعريف الوطني، شهادة إقامة، صورتان شمسيتان</div>
    </div>
    <div class="note">المشاريع التي يفوق فيها حجم الاستثمار <b>8 مليون دج</b> تُرسل إلى المديرية العامة في الجزائر العاصمة لمعالجتها.</div>`,
    next:"committee_wait"
  },

  /* ---- shared: committee ---- */
  committee_wait:{
    title:"انتظار برمجة اللجنة",
    num:14,
    content:`<p>بعد قبول الملف، تنتظر أن تتم برمجة مشروعك للعرض على <b>لجنة مناقشة المشاريع الاستثمارية (CSVF)</b> في الوكالة الولائية NESDA، والتي تُقام مرة كل <b>15 يوم</b>.</p>
    <div class="note">خلال فترة الانتظار، حاول تحضير عرض تقديمي احترافي لمشروعك مع إرفاق صور وفيديوهات، وحتى النموذج الأولي إذا كان متوفرًا.</div>`,
    next:"committee_day"
  },

  committee_day:{
    title:"يوم انعقاد اللجنة",
    num:15,
    content:`<p>حاول أن تصل في الوقت المناسب. ستعرض مشروعك أمام حوالي <b>13 شخصًا</b> يتكوّنون من:</p>
    <div class="doc-list">
      <div class="item">5 ممثلين للبنوك العمومية</div>
      <div class="item">مدير الوكالة الولائية NESDA</div>
      <div class="item">ممثل عن CDE</div>
      <div class="item">ممثل عن المركز الوطني للسجل التجاري</div>
      <div class="item">ممثل عن التكوين المهني</div>
      <div class="item">ممثل عن مديرية البيئة</div>
      <div class="item">ممثل عن مديرية التجارة</div>
      <div class="item">ممثل عن مديرية الصناعة</div>
      <div class="item">المرافق الرئيسي لوكالة NESDA</div>
    </div>
    <p>بعد عرض مشروعك ستتم مناقشته، ثم تتعرّف على النتيجة: قبول أو رفض، إضافة إلى البنك الذي اختار تمويل مشروعك.</p>`,
    next:"result_choice"
  },

  result_choice:{
    title:"نتيجة اللجنة",
    num:16,
    content:`<p>ما هي نتيجة عرض مشروعك؟</p>`,
    choices:[
      { label:"تم القبول", sub:"تابع إجراءات التمويل", next:"accepted" },
      { label:"تم الرفض", sub:"صحّح الأخطاء وأعد المحاولة", next:"rejected" },
    ]
  },

  rejected:{
    title:"في حال الرفض",
    num:17,
    content:`<p>قم بإصلاح الأخطاء التي تسبّبت في الرفض، حتى تتم برمجتك من جديد في اجتماع اللجنة القادم.</p>`,
    choices:[
      { label:"العودة إلى يوم انعقاد اللجنة", sub:"بعد تصحيح الملف", next:"committee_day" },
    ]
  },

  accepted:{
    title:"بعد القبول",
    num:17,
    content:`<p>بعد القبول بأسبوع، ستتلقى استدعاءً من فرع الوكالة لاستلام <b>شهادة القابلية</b> لتمويل مشروعك.</p>
    <p>بعد استلام شهادة القابلية سيتم نقل ملفك إلى البنك، وبعدها يتم تجهيز الموافقة البنكية.</p>
    <div class="note">فترة استلام الموافقة البنكية تختلف من بنك لآخر، وقد تنتظر حتى <b>3 أشهر</b> في بعض البنوك.</div>`,
    next:"rent_office"
  },

  rent_office:{
    title:"كراء المقر",
    num:18,
    content:`<p>بعد استلام الموافقة البنكية، تبدأ إجراءات التأسيس بكراء مقر.</p>
    <p>إذا كنت ستستفيد من مبلغ الإيجار في قرض NESDA، يجب أن تكتب طلبًا للاستفادة من القرض غير المكافئ لإيجار المحل.</p>
    <div class="doc-list">
      <div class="item">أقصى مبلغ للقرض: 500.000 دج (50 مليون سنتيم)</div>
      <div class="item">مدة الإيجار: سنتان قابلة للتجديد</div>
    </div>
    <p>يجب إعلام صاحب المحل بأن:</p>
    <ul>
      <li>مبلغ الإيجار سيدفعه الوكالة</li>
      <li>الدفع يتم عبر إيداع المبلغ في حساب الموثّق، الذي يحوّله لاحقًا إلى حساب المؤجّر</li>
      <li>الدفع لا يكون فوريًا، وقد يستغرق حتى 3 أشهر</li>
    </ul>
    <p>توقّع عقد الإيجار مع المؤجّر عند الموثّق.</p>`,
    next:"site_inspection"
  },

  site_inspection:{
    title:"لجنة معاينة المحل",
    num:19,
    content:`<p>بعد إتمام إجراءات الإيجار، يجب إعلام الوكالة لتُخرج <b>لجنة المعاينة</b> لمعاينة المحل.</p>
    <p>بعد إتمام هذه المعاينة، تنتقل إلى الخطوة التالية.</p>`,
    next:"trade_register_choice"
  },

  trade_register_choice:{
    title:"استخراج السجل التجاري",
    num:20,
    content:`<p>الخطوات التالية تختلف بحسب الشكل القانوني الذي اخترته سابقًا.</p>`,
    dynamicNext:true /* resolved in JS based on state.legalForm */
  },

  /* ---- natural person: registration steps ---- */
  np_trade_register:{
    title:"السجل التجاري — شخص طبيعي",
    num:21,
    content:`<p>يمكن إنشاء السجل التجاري لدى المركز الوطني للسجل التجاري بطريقتين: التقدم إلى مصالح الشباك الوحيد، أو عبر البوابة الإلكترونية cnrc.dz (الوصول إلى الإجراءات ← التسجيل عبر الإنترنت).</p>
    <p>وثائق القيد في السجل التجاري للشخص الطبيعي:</p>
    <div class="doc-list">
      <div class="item">طلب موقّع ومحرّر على نماذج المركز الوطني للسجل التجاري</div>
      <div class="item">إثبات صلاحية المقر (سند ملكية أو عقد إيجار أو امتياز أرض أو قرار تخصيص)</div>
      <div class="item">إيصال دفع الطابع المنصوص عليه (4000 دج)</div>
      <div class="item">إيصال دفع رسوم التسجيل</div>
      <div class="item">نسخة من بطاقة الإقامة (للأجانب الخاضعين للضريبة)</div>
      <div class="item">نسخة من الترخيص أو الموافقة المؤقتة للأنشطة الخاضعة للتنظيم</div>
    </div>
    <p>بعد استخراج السجل التجاري، توجّه إلى مطبعة لتجهيز ختم الشركة والمسير.</p>`,
    next:"np_nif"
  },

  np_nif:{
    title:"رقم التعريف الضريبي (NIF)",
    num:22,
    content:`<p>عند التسجيل لدى المركز الوطني للسجل التجاري، يُخصَّص لك رقم تعريف يُستخدم في كل إجراءاتك الإدارية، خصوصًا لدى مصلحة الضرائب.</p>
    <p>المستندات المطلوبة:</p>
    <div class="doc-list">
      <div class="item">نسخة مصدّقة من السجل التجاري</div>
      <div class="item">سند ملكية المحل التجاري أو عقد إيجار موثّق</div>
      <div class="item">نموذج من مفتشية الضرائب، مملوء وموقّع ومختوم باسم الشركة</div>
    </div>
    <div class="note">الحصول على رقم NIF إلزامي لجميع الأشخاص الطبيعيين الخاضعين للقيد في السجل التجاري. يمكن طلبه عبر الإنترنت على الموقع: nifenligne.mfdgi.gov.dz</div>`,
    next:"np_nis"
  },

  np_nis:{
    title:"رقم التعريف الإحصائي (NIS)",
    num:23,
    content:`<p>قدّم طلبًا إلى المصالح الإحصائية الجهوية للديوان الوطني للإحصائيات مع الوثائق التالية:</p>
    <div class="doc-list">
      <div class="item">نسخة من البطاقة الضريبية</div>
      <div class="item">صورة من السجل التجاري</div>
      <div class="item">نسخة من بطاقة الهوية</div>
    </div>
    <div class="note">يتم إيداع الملف في المصلحة الجهوية للديوان الوطني للإحصاء في: وهران، الجزائر العاصمة، أو قسنطينة.</div>`,
    next:"np_bank"
  },

  np_bank:{
    title:"فتح حساب بنكي تجاري",
    num:24,
    content:`<p>يجب أن يكون لمشروعك حساب مصرفي مخصّص. المستندات المطلوبة:</p>
    <div class="doc-list">
      <div class="item">السجل التجاري</div>
      <div class="item">بطاقة التسجيل الضريبي</div>
      <div class="item">شهادة ميلاد صاحب المشروع</div>
      <div class="item">نسخة من بطاقة التعريف الوطني</div>
    </div>`,
    next:"personal_contribution"
  },

  /* ---- company: legal creation + registration ---- */
  comp_legal_creation:{
    title:"الإنشاء القانوني للشركة",
    num:21,
    content:`<p>العقد يكون في اسم الشركة قيد التأسيس وليس في اسم صاحب المشروع. خطوات الإنشاء القانوني:</p>
    <p><b>1. إعداد الوثائق القانونية:</b></p>
    <div class="doc-list">
      <div class="item">شهادات ميلاد وصور بطاقات التعريف الوطنية للشركاء</div>
      <div class="item">شهادة حجز التسمية، عقد إيجار أو سند ملكية لمقر الشركة</div>
      <div class="item">مشروع القانون الأساسي للشركة</div>
    </div>
    <p><b>2. إيداع رأس المال:</b> يُودع رأس مال الشركة ويُجمَّد في حساب بنكي مخصص للمؤسسات قيد التأسيس، مع استخراج شهادة الإيداع.</p>
    <div class="note">المساهمات النقدية: يمكن تحرير 20% منها كحد أدنى عند التأسيس، واستكمال الباقي خلال 5 سنوات.</div>
    <p><b>3. التوثيق والتسجيل:</b> التوجّه إلى مكتب الموثّق لتوقيع القانون الأساسي ودفع رسوم التسجيل والدمغة.</p>
    <p><b>4. النشر القانوني:</b> نشر ملخص التأسيس في النشرة الرسمية للإعلانات القانونية (BOAL)، بتكلفة حوالي <b>7.000 دج</b>.</p>
    <div class="note">كل هذه الخطوات يتكفّل بها الموثّق.</div>`,
    next:"comp_trade_register"
  },

  comp_trade_register:{
    title:"السجل التجاري — شركة",
    num:22,
    content:`<p>يتعيّن على أي شركة جديدة التسجيل لدى المركز الوطني للسجل التجاري (CNRC)، عبر الشباك الوحيد أو البوابة الإلكترونية cnrc.dz.</p>
    <p>وثائق القيد في السجل التجاري للشخص المعنوي:</p>
    <div class="doc-list">
      <div class="item">طلب موقّع ومحرّر على نماذج المركز الوطني للسجل التجاري</div>
      <div class="item">إثبات صلاحية المقر باسم الشركة (سند ملكية، عقد إيجار، أو قرار تخصيص)</div>
      <div class="item">نسخة من النظام الأساسي المنشئ للشركة</div>
      <div class="item">نسخة من إشعار إدراج النظام الأساسي في BOAL</div>
      <div class="item">إيصال دفع الطابع (4000 دج)</div>
      <div class="item">إيصال دفع رسوم القيد في السجل التجاري</div>
      <div class="item">نسخة من الترخيص أو الموافقة المؤقتة للأنشطة الخاضعة للتنظيم</div>
    </div>
    <p>بعد استخراج السجل التجاري، توجّه إلى مطبعة لتجهيز ختم الشركة والمسير.</p>`,
    next:"comp_nif"
  },

  comp_nif:{
    title:"رقم التعريف الضريبي (NIF)",
    num:23,
    content:`<p>عند تسجيل الشركة لدى CNRC، يُخصَّص لها رقم تعريف لكل إجراءاتها الإدارية والضريبية. يجب على المدير تقديم:</p>
    <div class="doc-list">
      <div class="item">نسخة مصدّقة من السجل التجاري</div>
      <div class="item">النظام الأساسي للشركة</div>
      <div class="item">سند ملكية المحل التجاري أو عقد إيجار موثّق باسم الشركة</div>
      <div class="item">نموذج من مفتشية الضرائب، مملوء وموقّع ومختوم باسم الشركة</div>
    </div>
    <div class="note">رقم NIF إلزامي لجميع الأشخاص الطبيعيين والاعتباريين الخاضعين للقيد في السجل التجاري. يُطلب عبر: nifenligne.mfdgi.gov.dz</div>`,
    next:"comp_nis"
  },

  comp_nis:{
    title:"رقم التعريف الإحصائي (NIS)",
    num:24,
    content:`<p>قدّم طلبًا إلى المصالح الإحصائية الجهوية للديوان الوطني للإحصائيات مع الوثائق التالية:</p>
    <div class="doc-list">
      <div class="item">نسخة من البطاقة الضريبية</div>
      <div class="item">صورة من السجل التجاري</div>
      <div class="item">نسخة من بطاقة الهوية</div>
      <div class="item">صورة من النظام الأساسي للشركة</div>
    </div>
    <div class="note">يتم إيداع الملف في المصلحة الجهوية للديوان الوطني للإحصاء في: وهران، الجزائر العاصمة، أو قسنطينة.</div>`,
    next:"comp_bank"
  },

  comp_bank:{
    title:"فتح حساب بنكي تجاري",
    num:25,
    content:`<p>يجب أن يكون للشركة حساب مصرفي مخصّص. المستندات المطلوبة:</p>
    <div class="doc-list">
      <div class="item">السجل التجاري</div>
      <div class="item">بطاقة التسجيل الضريبي</div>
      <div class="item">النظام الأساسي للشركة</div>
      <div class="item">بلاغ النشرة الرسمية للإعلانات القانونية (BOAL)</div>
    </div>`,
    next:"personal_contribution"
  },

  /* ---- shared for both paths from here on ---- */
  personal_contribution:{
    title:"إيداع المساهمة الشخصية",
    num:26,
    content:`<p>بعد فتح الحساب البنكي، يجب إيداع مبلغ المساهمة الشخصية في المشروع حسب صيغة التمويل والنسبة المترتبة عليك.</p>
    <div class="note">بعد هذه الخطوة، الإجراءات التالية تنطبق على <b>المسارين</b> (الشخص الطبيعي والشركة) بنفس الطريقة.</div>`,
    next:"sign_nesda_agreement"
  },

  sign_nesda_agreement:{
    title:"توقيع الاتفاقية مع وكالة NESDA",
    num:27,
    content:`<p>الخطوة الأولى في هذه المرحلة: توقيع الاتفاقية مع وكالة NESDA.</p>`,
    next:"sign_bank_agreement"
  },

  sign_bank_agreement:{
    title:"توقيع الاتفاقية مع البنك",
    num:28,
    content:`<p>توقّع الاتفاقية مع البنك الذي اختار تمويل مشروعك.</p>
    <div class="note">بعض البنوك تطلب تسجيل الاتفاقية لدى مصلحة تسجيل العقود.</div>`,
    next:"sign_guarantee_fund"
  },

  sign_guarantee_fund:{
    title:"صندوق ضمان القروض",
    num:29,
    content:`<p>توقّع الاتفاقية وتشترك في <b>صندوق ضمان القروض</b> التابع لوكالة NESDA.</p>`,
    next:"loan_bonds"
  },

  loan_bonds:{
    title:"سندات القرض",
    num:30,
    content:`<p>سيتم استدعاؤك من طرف فرع NESDA لتوقيع سندات القرض.</p>`,
    next:"purchase_order"
  },

  purchase_order:{
    title:"سند الطلب (Commande de bon)",
    num:31,
    content:`<p>يجب أن تقدّم <b>سند طلب</b> (commande de bon) بكل محتويات الفاتورة الشكلية للمورد، موقّع من الطرفين ومختوم.</p>`,
    next:"supply_contract_notary"
  },

  supply_contract_notary:{
    title:"إعداد عقد التوريد",
    num:32,
    content:`<p>قدّم نسخة من سند الطلب مع الفواتير الشكلية إلى الموثّق، لإعداد <b>عقد التوريد</b>.</p>`,
    next:"supply_contract_sign"
  },

  supply_contract_sign:{
    title:"توقيع عقد التوريد",
    num:33,
    content:`<p>تجتمع مع المورد عند الموثّق لتوقيع عقد التوريد.</p>
    <div class="note">يجب أن ينص العقد على طريقة الدفع التالية:
      <ul style="margin:8px 0 0;">
        <li>10% من قيمة العتاد قبل الاستلام</li>
        <li>90% من قيمة العتاد بعد التسليم</li>
      </ul>
    </div>
    <p>حدّد فترة التسليم المسموحة بعد تقديم الشيك الأول بقيمة 10%.</p>`,
    next:"submit_docs"
  },

  submit_docs:{
    title:"تقديم الوثائق للوكالة والبنك",
    num:34,
    content:`<p>قدّم نسخة من سند الطلب وعقد التوريد لكل من الوكالة والبنك.</p>`,
    next:"first_check"
  },

  first_check:{
    title:"الشيك الأول",
    num:35,
    content:`<p>انتظر أن يتم تجهيز الشيك الأول، وبعد أن يصبح جاهزًا عليك تسليمه إلى المورد حتى يتمكّن من تسليم العتاد لك في مقرّك.</p>`,
    next:"equipment_receipt"
  },

  equipment_receipt:{
    title:"استلام العتاد",
    num:36,
    content:`<p>بعد استلام العتاد، يجب أن يخرج <b>محضر قضائي</b> مرفقًا بموظف من وكالة NESDA لمعاينة العتاد ومطابقته مع الفواتير الشكلية وسند الطلب.</p>`,
    next:"pledge_notary"
  },

  pledge_notary:{
    title:"الرهن الحيازي للعتاد",
    num:37,
    content:`<p>تقوم بإعداد <b>الرهن الحيازي</b> للعتاد عند موثّق، مع إعلامه أن مصاريف الرهن الحيازي ستُدفع من طرف وكالة NESDA.</p>
    <div class="note">مصاريف الرهن الحيازي تدخل في إطار مصاريف التأسيس في هيكلة القرض.</div>`,
    next:"pledge_deposit"
  },

  pledge_deposit:{
    title:"إيداع نسخة الرهن الحيازي",
    num:38,
    content:`<p>بعد إعداد الرهن الحيازي، يجب إيداع نسخة منه لدى كل من البنك والوكالة.</p>`,
    next:"second_check"
  },

  second_check:{
    title:"الشيك الثاني وشيك التأمين",
    num:39,
    content:`<p>انتظر جاهزية الشيك الثاني بنسبة <b>90%</b> من قيمة العتاد، بالإضافة إلى الشيك الخاص بالتأمين، وقدّم كل شيك لصاحبه.</p>`,
    next:"social_security"
  },

  social_security:{
    title:"الصندوق الوطني للضمان الاجتماعي",
    num:40,
    content:`<p>استلم شيك الاشتراك في الصندوق الوطني للضمان الاجتماعي لغير الأجراء، وقدّمه للصندوق.</p>
    <div class="note">هذا المبلغ يدخل في إطار مصاريف التأسيس في هيكلة القرض.</div>`,
    next:"finish_line"
  },

  finish_line:{
    title:"الخطوة الأخيرة",
    num:41,
    content:`<p>هنا تكون قد استكملت كل إجراءات التمويل، ويمكنك البدء بنشاطك <b>فورًا</b>.</p>`,
    isFinal:true
  }
};

/* ordered "backbone" ids used to compute a rough progress % (branches share numbering already) */
const totalStagesEstimate = 41;

/* ============ STATE ============ */
let history = [];      // stack of visited step ids (for back navigation)
let current = "idea_check";
let legalForm = null;  // 'np' or 'comp' — needed to resolve trade_register_choice

const cardEl = document.getElementById("card");
const railEl = document.getElementById("rail");
const stageLabelEl = document.getElementById("stageLabel");

function buildRail(){
  railEl.innerHTML = "";
  const segCount = 20;
  for(let i=0;i<segCount;i++){
    const s = document.createElement("div");
    s.className = "seg";
    railEl.appendChild(s);
  }
}
buildRail();

function updateRail(num){
  const segs = railEl.querySelectorAll(".seg");
  const filled = Math.round((num/totalStagesEstimate)*segs.length);
  segs.forEach((s,i)=> s.classList.toggle("done", i < filled));
}

function render(id){
  const step = steps[id];
  current = id;
  updateRail(step.num || 1);
  stageLabelEl.innerHTML = `المرحلة <b>${step.num || 1}</b> من نحو ${totalStagesEstimate}`;

  let html = "";
  if(step.isFinal){
    html += `<div class="end-badge">🎉 انتهت خطوات المسار</div>`;
  }
  html += `<h2 class="card-title"><span class="step-num">${step.num || "•"}</span>${step.title}</h2>`;
  html += `<div class="content">${step.content}</div>`;

  if(step.choices){
    html += `<div class="choices">`;
    step.choices.forEach(c=>{
      html += `<button class="choice-btn" data-next="${c.next}" data-label="${c.label}">
        <span>${c.label}${c.sub ? `<small>${c.sub}</small>` : ""}</span>
        <span class="arrow">←</span>
      </button>`;
    });
    html += `</div>`;
  } else {
    html += `<div class="nav-row">
      <button class="btn btn-ghost" id="backBtn" ${history.length===0 ? "disabled":""}>الخطوة السابقة</button>
      ${step.isFinal ? "" : `<button class="btn btn-primary" id="nextBtn">الخطوة التالية ←</button>`}
    </div>`;
  }

  cardEl.innerHTML = html;

  // wire events
  const backBtn = document.getElementById("backBtn");
  if(backBtn) backBtn.addEventListener("click", goBack);

  const nextBtn = document.getElementById("nextBtn");
  if(nextBtn) nextBtn.addEventListener("click", ()=> goTo(resolveNext(step)));

  cardEl.querySelectorAll(".choice-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const nextId = btn.getAttribute("data-next");
      // capture legal form choice
      if(id === "legal_form_choice"){
        legalForm = nextId === "np_file" ? "np" : "comp";
      }
      goTo(nextId);
    });
  });
}

function resolveNext(step){
  if(step.dynamicNext){
    return legalForm === "np" ? "np_trade_register" : "comp_trade_register";
  }
  return step.next;
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

document.getElementById("restartBtn").addEventListener("click", ()=>{
  history = [];
  legalForm = null;
  render("idea_check");
  window.scrollTo({top:0, behavior:"smooth"});
});

/* intro screen handoff */
document.getElementById("startBtn").addEventListener("click", ()=>{
  document.getElementById("introScreen").style.display = "none";
  document.getElementById("mainApp").style.display = "block";
  render("idea_check");
  window.scrollTo({top:0, behavior:"smooth"});
});

/* ============================================================
   دليل التزامات المستخدم في التشريع الجزائري — Oathentiq
   منطق الدليل التفاعلي (بيانات + عرض + تنقل)
   ============================================================ */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     1) بيانات المحاور (7 محاور قانونية)
  --------------------------------------------------------- */
  const STAGES = [
    {
      icon: "💰",
      eyebrow: "المحور الأول · الأجور",
      title: "التزامات الأجور والحماية المالية",
      ref: "القانون 90-11",
      type: "grid",
      points: [
        {
          num: "01",
          title: "دفع الأجر بانتظام",
          desc: "الالتزام بصرف الرواتب عند حلول أجل استحقاقها بصفة دورية.",
          badge: "المادة 88",
        },
        {
          num: "02",
          title: "احترام الحد الأدنى للأجور",
          desc: "منع دفع مبالغ أقل من الأجر الوطني الأدنى المضمون (SNMG).",
          badge: "المادة 87",
        },
        {
          num: "03",
          title: "تسليم قسيمة الراتب",
          desc: "وجوب تسليم كشف راتب دوري يوضح كافة عناصر الأجر والاقتطاعات بالتسمية.",
          badge: "المادة 86",
        },
        {
          num: "04",
          title: "ضمان المساواة",
          desc: "الالتزام بمبدأ أجر متساوٍ لعمل ذي قيمة متساوية دون تمييز.",
          badge: "المادة 84",
        },
      ],
      summary: "الأجر = حق قانوني — الالتزام بآجله وحدّه الأدنى ضمان للكرامة",
    },
    {
      icon: "🏭",
      eyebrow: "المحور الثاني · بيئة العمل",
      title: "التزامات بيئة العمل والتنظيم",
      ref: "القانون 90-11",
      type: "grid",
      points: [
        {
          num: "01",
          title: "النظام الداخلي",
          desc: "إعداد وثيقة مكتوبة تحدد القواعد التقنية والصحة والانضباط في المؤسسات التي تشغّل 20 عاملاً فأكثر.",
          badge: "المادة 75",
        },
        {
          num: "02",
          title: "كرامة العامل وسلامته",
          desc: "توفير ظروف عمل تضمن السلامة البدنية والمعنوية واحترام الكرامة.",
          badge: "المادة 6",
        },
        {
          num: "03",
          title: "أوقات العمل",
          desc: "الالتزام بالمدة القانونية المحددة بـ 40 ساعة أسبوعياً.",
          badge: "المادة 22",
        },
        {
          num: "04",
          title: "التكوين والترقية",
          desc: "مباشرة أعمال التكوين وتحسين المستوى المهني للعمال.",
          badge: "المادة 57",
        },
      ],
      summary: "بيئة عمل منظمة = إنتاجية أعلى + علاقات عمل مستقرة",
    },
    {
      icon: "⚖️",
      eyebrow: "المحور الثالث · مفتشية العمل",
      title: "الالتزام تجاه مفتشية العمل",
      ref: "القانون 90-11",
      type: "authority",
      authority: {
        label: "الإدارة المختصة",
        name: "مفتشية العمل المختصة إقليمياً",
        purposeLabel: "الغرض",
        purpose: "الرقابة على تطبيق التشريع وضمان ظروف الصحة والأمن والوقاية.",
      },
      checklist: [
        {
          text: "وضع السجلات القانونية تحت تصرف المفتش عند كل طلب.",
          badge: "المادة 156 · 90-11",
        },
        {
          text: "إيداع نسخة من النظام الداخلي للمصادقة على مطابقته للقانون.",
          badge: "المادة 79 · 90-11",
        },
      ],
      summary: "التعاون مع مفتشية العمل = حماية قانونية للمؤسسة والعمال",
    },
    {
      icon: "🏥",
      eyebrow: "المحور الرابع · الضمان الاجتماعي",
      title: "الالتزام تجاه صندوق الضمان الاجتماعي (CNAS)",
      ref: "قانون 83-14",
      type: "authority",
      authority: {
        label: "الإدارة المختصة",
        name: "الصندوق الوطني للتأمينات الاجتماعية للعمال الأجراء",
        purposeLabel: "الغرض",
        purpose: "ضمان التغطية الصحية والاجتماعية وحماية العمال من حوادث العمل.",
      },
      checklist: [
        {
          text: "التصريح بالنشاط خلال 10 أيام من بدايته.",
          badge: "المادة 10 · قانون 83-14",
        },
        {
          text: "التصريح بانتساب العمال الجدد في أجل 10 أيام من تاريخ تشغيلهم.",
          badge: "المادة 10 · قانون 83-14",
        },
        {
          text: "اقتطاع حصة العامل (9%) وتحويلها مع حصة المستخدم بانتظام.",
        },
        {
          text: "دفع الاشتراكات الفصلية أو الشهرية حسب الحالة عبر التصريح DAC.",
        },
        {
          text: "إيداع التصريح السنوي للأجور DAS المتضمن معلومات العمال الصحيحة مع تدوين أجورهم وفترات عملهم.",
        },
      ],
      summary: "التأخر عن التصريح لـ CNAS = غرامات وعقوبات قانونية",
    },
    {
      icon: "🧾",
      eyebrow: "المحور الخامس · الضرائب والمحكمة",
      title: "الالتزام تجاه إدارة الضرائب والمحكمة",
      ref: "القانون 90-11",
      type: "grid",
      points: [
        {
          num: "01",
          title: "إدارة الضرائب",
          desc: "اقتطاع الضريبة على الدخل الإجمالي (IRG) من المنبع وتحويلها لمصالح الضرائب.",
        },
        {
          num: "02",
          title: "كتابة ضبط المحكمة",
          desc: "إيداع نسخة من النظام الداخلي لتسجيله وضمان نفاذه القانوني.",
          badge: "المادة 79 · 90-11",
        },
        {
          num: "03",
          title: "الاتفاقيات الجماعية",
          desc: "إيداع الاتفاقيات الجماعية فور إبرامها لدى مفتشية العمل والمحكمة المختصة.",
          badge: "المادة 126 · 90-11",
        },
      ],
      summary: "الإيداع القانوني = نفاذ الاتفاقيات وحماية الطرفين",
    },
    {
      icon: "📚",
      eyebrow: "المحور السادس · السجلات الإلزامية",
      title: "مسك السجلات الإلزامية (مرسوم 96-98)",
      ref: "مرسوم 96-98",
      type: "registers",
      lead: {
        number: "7",
        text: "يجب على كل مستخدم مسك 7 سجلات قانونية مرقّمة ومؤشّر عليها.",
        badge: "المادة 1 من المرسوم",
      },
      registers: [
        { icon: "👥", label: "سجل العمال" },
        { icon: "🚨", label: "سجل حوادث العمل" },
        { icon: "🏖️", label: "سجل العطل السنوية" },
        { icon: "⚠️", label: "سجل إنذارات مفتشية العمل" },
        { icon: "💵", label: "دفتر الأجور" },
      ],
      notes: [
        "التصديق: يوقّع القاضي دفتر الأجور فقط، بينما تؤشّر باقي السجلات من طرف مفتش العمل المختص إقليمياً.",
        "ملاحظة: حسب الحالة، يمكن مسك سجلات إضافية — مثال: سجل الأجانب عند تشغيل عمال أجانب.",
      ],
      duration: {
        label: "مدة الحفظ: 10 سنوات",
        text: "يجب الاحتفاظ بهذه السجلات لمدة 10 سنوات من تاريخ اختتامها.",
        badge: "المادة 17 من المرسوم",
      },
      summary: "السجلات المرقّمة المؤشّر عليها = دليل قانوني يحمي صاحب العمل",
    },
    {
      icon: "🔒",
      eyebrow: "المحور السابع · الحماية والإنهاء",
      title: "حماية العمال وضوابط الإنهاء",
      ref: "القانون 90-11",
      type: "grid",
      points: [
        {
          num: "01",
          title: "حماية الأجر",
          desc: "منع حجز الأجور أو اقتطاعها مهما كان السبب باستثناء الحالات القانونية.",
          badge: "المادة 90",
        },
        {
          num: "02",
          title: "استمرارية العقود",
          desc: "تغيير الوضعية القانونية للمؤسسة لا ينهي علاقات العمل بل تنتقل للمستخدم الجديد.",
          badge: "المادة 74",
        },
        {
          num: "03",
          title: "غرامات المخالفة",
          desc: "أي إخلال بالتزامات الأجور أو السجلات يعرّض صاحب العمل لغرامات مالية مشدّدة.",
          badge: "المادة 145 وما يليها",
        },
      ],
      summary: "احترام القانون = تجنّب الغرامات وحماية سمعة المؤسسة",
    },
  ];

  const TOTAL = STAGES.length;
  const OUTRO_INDEX = TOTAL; // شاشة ختامية بعد آخر محور

  /* ---------------------------------------------------------
     2) عناصر DOM
  --------------------------------------------------------- */
  const introScreen = document.getElementById("introScreen");
  const mainApp = document.getElementById("mainApp");
  const startBtn = document.getElementById("startBtn");
  const restartBtn = document.getElementById("restartBtn");
  const railEl = document.getElementById("rail");
  const stageLabelEl = document.getElementById("stageLabel");
  const cardEl = document.getElementById("card");

  let current = 0;

  /* ---------------------------------------------------------
     3) أدوات مساعدة لبناء العناصر
  --------------------------------------------------------- */
  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function badge(text) {
    return `<span class="badge">★ ${text}</span>`;
  }

  /* ---------------------------------------------------------
     4) بناء شريط التقدّم (rail)
  --------------------------------------------------------- */
  function renderRail() {
    railEl.innerHTML = "";
    for (let i = 0; i < TOTAL; i++) {
      const step = el(
        "button",
        "rail-step" +
          (i === current ? " active" : "") +
          (i < current ? " done" : ""),
        `<span class="rail-num">${i + 1}</span>`
      );
      step.type = "button";
      step.setAttribute("aria-label", STAGES[i].eyebrow);
      step.addEventListener("click", () => goTo(i));
      railEl.appendChild(step);
    }
  }

  /* ---------------------------------------------------------
     5) عرض بطاقة محور (grid / authority / registers)
  --------------------------------------------------------- */
  function renderGrid(stage) {
    const grid = el("div", "points-grid");
    stage.points.forEach((p) => {
      const point = el(
        "div",
        "point",
        `
        <span class="point-num">${p.num}</span>
        <h3 class="point-title">${p.title}</h3>
        <p class="point-desc">${p.desc}</p>
        ${p.badge ? badge(p.badge) : ""}
      `
      );
      grid.appendChild(point);
    });
    return grid;
  }

  function renderAuthority(stage) {
    const wrap = el("div", "authority-box");

    const head = el(
      "div",
      "authority-head",
      `
      <span class="authority-icon">${stage.icon}</span>
      <div>
        <span class="authority-label">${stage.authority.label}</span>
        <h3 class="authority-name">${stage.authority.name}</h3>
      </div>
    `
    );
    wrap.appendChild(head);

    const purpose = el(
      "p",
      "authority-purpose",
      `<b>${stage.authority.purposeLabel}:</b> ${stage.authority.purpose}`
    );
    wrap.appendChild(purpose);

    const listTitle = el("p", "checklist-title", "★ كيفية الالتزام:");
    wrap.appendChild(listTitle);

    const list = el("ul", "checklist");
    stage.checklist.forEach((item) => {
      const li = el(
        "li",
        "checklist-item",
        `
        <span class="check-mark">✔</span>
        <span class="check-text">${item.text}</span>
        ${item.badge ? `<span class="check-badge">${item.badge}</span>` : ""}
      `
      );
      list.appendChild(li);
    });
    wrap.appendChild(list);

    return wrap;
  }

  function renderRegisters(stage) {
    const wrap = el("div", "registers-box");

    const lead = el(
      "div",
      "registers-lead",
      `
      <span class="registers-number">${stage.lead.number}</span>
      <div>
        <p class="registers-text">${stage.lead.text}</p>
        ${badge(stage.lead.badge)}
      </div>
    `
    );
    wrap.appendChild(lead);

    const listTitle = el("p", "checklist-title", "★ أهم السجلات:");
    wrap.appendChild(listTitle);

    const grid = el("div", "registers-grid");
    stage.registers.forEach((r) => {
      grid.appendChild(
        el(
          "div",
          "register-item",
          `<span class="register-icon">${r.icon}</span><span class="register-label">${r.label}</span>`
        )
      );
    });
    wrap.appendChild(grid);

    stage.notes.forEach((n) => {
      wrap.appendChild(el("p", "registers-note", n));
    });

    wrap.appendChild(
      el(
        "p",
        "registers-duration",
        `<b>${stage.duration.label}</b> — ${stage.duration.text} ${badge(
          stage.duration.badge
        )}`
      )
    );

    return wrap;
  }

  function renderStage(index) {
    const stage = STAGES[index];

    cardEl.innerHTML = "";

    const header = el(
      "div",
      "card-header",
      `
      <span class="card-icon">${stage.icon}</span>
      <div>
        <span class="card-eyebrow">${stage.eyebrow}</span>
        <h2 class="card-title">${stage.title}</h2>
      </div>
      <span class="card-ref">★ المرجع: ${stage.ref}</span>
    `
    );
    cardEl.appendChild(header);

    let body;
    if (stage.type === "grid") body = renderGrid(stage);
    else if (stage.type === "authority") body = renderAuthority(stage);
    else if (stage.type === "registers") body = renderRegisters(stage);
    cardEl.appendChild(body);

    cardEl.appendChild(el("div", "card-summary", `★ ${stage.summary}`));

    cardEl.appendChild(renderNav(index));

    stageLabelEl.textContent = `المحور ${index + 1} من ${TOTAL} — ${stage.eyebrow.split("·")[1].trim()}`;
  }

  /* ---------------------------------------------------------
     6) الشاشة الختامية (مصدر الدليل: Oathentiq)
  --------------------------------------------------------- */
  function renderOutro() {
    cardEl.innerHTML = "";
    stageLabelEl.textContent = "خلاصة الدليل";

    const outro = el(
      "div",
      "outro-box",
      `
      <span class="outro-check">✅</span>
      <h2 class="outro-title">أنهيت الدليل الكامل لالتزامات المستخدم</h2>
      <p class="outro-sub">
        غطّى هذا الدليل ${TOTAL} محاور قانونية أساسية بصفة صاحب العمل تجاه العمال
        والهيئات الرسمية، وفق القانون 90-11 والمراسيم التنظيمية.
      </p>

      <div class="outro-source">
        <span class="outro-source-label">مصدر هذا الدليل</span>
        <h3 class="outro-source-name">مكتب Oathentiq للاستشارات القانونية</h3>
        <p class="outro-source-desc">استشارة قانونية متخصصة في قانون العمل — إعداد النظام الداخلي، مسك السجلات الإلزامية، تصريحات CNAS ومفتشية العمل، والاتفاقيات الجماعية.</p>
        <a class="btn btn-primary outro-link" href="https://oathentiq.com" target="_blank" rel="noopener">→ OATHENTIQ.COM</a>
      </div>
    `
    );
    cardEl.appendChild(outro);

    const nav = el("div", "card-nav");
    const prevBtn = el("button", "btn nav-btn", "→ رجوع للمحور الأخير");
    prevBtn.type = "button";
    prevBtn.addEventListener("click", () => goTo(TOTAL - 1));
    nav.appendChild(prevBtn);

    const restart = el("button", "btn btn-primary nav-btn", "إعادة البدء من جديد ↺");
    restart.type = "button";
    restart.addEventListener("click", () => goTo(0));
    nav.appendChild(restart);

    cardEl.appendChild(nav);

    // إبراز اكتمال كل الخطوات في الشريط
    Array.from(railEl.children).forEach((step) => step.classList.add("done"));
    railEl.querySelectorAll(".active").forEach((s) => s.classList.remove("active"));
  }

  /* ---------------------------------------------------------
     7) أزرار التنقل داخل البطاقة
  --------------------------------------------------------- */
  function renderNav(index) {
    const nav = el("div", "card-nav");

    const prevBtn = el("button", "btn nav-btn", "→ السابق");
    prevBtn.type = "button";
    prevBtn.disabled = index === 0;
    prevBtn.addEventListener("click", () => goTo(index - 1));
    nav.appendChild(prevBtn);

    const isLast = index === TOTAL - 1;
    const nextBtn = el(
      "button",
      "btn btn-primary nav-btn",
      isLast ? "خلاصة الدليل ←" : "التالي ←"
    );
    nextBtn.type = "button";
    nextBtn.addEventListener("click", () => goTo(index + 1));
    nav.appendChild(nextBtn);

    return nav;
  }

  /* ---------------------------------------------------------
     8) التنقل بين المحاور
  --------------------------------------------------------- */
  function goTo(index) {
    current = Math.max(0, Math.min(index, OUTRO_INDEX));
    renderRail();
    if (current === OUTRO_INDEX) {
      renderOutro();
    } else {
      renderStage(current);
    }
    cardEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------------------------------------------------------
     9) بدء التشغيل
  --------------------------------------------------------- */
  function startGuide() {
    introScreen.style.display = "none";
    mainApp.style.display = "block";
    current = 0;
    renderRail();
    renderStage(0);
  }

  if (startBtn) startBtn.addEventListener("click", startGuide);
  if (restartBtn)
    restartBtn.addEventListener("click", () => {
      current = 0;
      renderRail();
      renderStage(0);
    });
})();

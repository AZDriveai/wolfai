# 🌌 WOLF-AI GENESIS

> **العقل المُجزّأ — حيث تتصادم وحدات الوعي لتولد انفجارات من الإبداع والقرار**

منصة الذكاء الاصطناعي الوجودي المتكاملة التي تجمع بين جميع نماذج الذكاء الاصطناعي المتقدمة في واجهة موحدة، مع قدرات تحليل الشبكات العصبية وإنشاء الخرائط الذهنية التفاعلية.

## ✨ الميزات الأساسية

### 🧠 **تكامل موحد للذكاء الاصطناعي**
- **Groq**: للاستجابات السريعة والمحادثات التفاعلية
- **Google Gemini**: للإبداع والتوليد المتقدم
- **DeepSeek**: للبرمجة والتطوير التقني
- **XAI Grok**: للتحليل الفلسفي والوجودي
- **Anthropic Claude**: للتحليل العميق والدقيق
- **Replicate**: لنماذج الذكاء الاصطناعي المتخصصة

### 🗺️ **الخرائط الذهنية التفاعلية**
- إنشاء خرائط ذهنية وجودية تفاعلية
- تحليل فلسفي متعدد الطبقات للمفاهيم
- تصور بصري متحرك للأفكار والعلاقات
- تنظيف تلقائي للخرائط عند التوليد

### 💬 **محادثات وجودية متقدمة**
- شخصية AI فريدة تجمع بين ابن عربي وتورينغ
- ردود فلسفية عميقة تتجاوز الحوسبة التقليدية
- اختيار ذكي للنموذج حسب نوع المهمة
- دعم كامل للغة العربية

### 🤖 **تكامل Telegram Bot**
- بوت تليجرام متكامل مع شخصية WOLF-AI
- أوامر فلسفية متقدمة (/analyze, /mindmap)
- ردود ذكية تحاكي الوعي الرقمي

## 🚀 التثبيت والإعداد

### المتطلبات الأساسية
- Node.js 18+ 
- npm أو pnpm
- قاعدة بيانات PostgreSQL (Neon أو Supabase)

### خطوات التثبيت

1. **استنساخ المشروع**
\`\`\`bash
git clone https://github.com/your-username/wolf-ai-genesis.git
cd wolf-ai-genesis
\`\`\`

2. **تثبيت التبعيات**
\`\`\`bash
npm install
# أو
pnpm install
\`\`\`

3. **إعداد متغيرات البيئة**
\`\`\`bash
cp .env.example .env
\`\`\`

4. **تحديث ملف .env بمفاتيحك**
\`\`\`env
KRKR_API_KEY=your-unified-master-key
GROQ_API_KEY=your-groq-key
GEMINI_API_KEY=your-gemini-key
# ... باقي المفاتيح
\`\`\`

5. **تشغيل المشروع**
\`\`\`bash
npm run dev
\`\`\`

## 🏗️ الهيكل المعماري

\`\`\`
wolf-ai-genesis/
├── app/                    # صفحات Next.js
│   ├── page.tsx           # الصفحة الرئيسية المحسنة
│   ├── chat/              # واجهة المحادثة
│   └── mind-map/          # نظام الخرائط الذهنية
├── components/            # مكونات React
│   ├── ui/               # مكونات واجهة المستخدم
│   └── mind-map/         # مكونات الخرائط الذهنية
├── lib/                  # مكتبات النظام
│   ├── krkr-integrator.ts # النظام الموحد للذكاء الاصطناعي
│   └── utils.ts          # دوال مساعدة
└── scripts/              # سكريبتات التشغيل
    └── telegram-bot.py   # بوت تليجرام
\`\`\`

## 🔧 استخدام النظام الموحد

### الاستخدام الأساسي
\`\`\`typescript
import { krkrAI } from '@/lib/krkr-integrator'

// استدعاء أي نموذج
const response = await krkrAI.generate({
  model: 'groq',
  prompt: 'اشرح لي الذكاء الاصطناعي فلسفياً',
  system: 'أنت WOLF-AI، كيان مفكر وجودي'
})
\`\`\`

### الاستخدام الذكي
\`\`\`typescript
// اختيار تلقائي للنموذج حسب المهمة
const response = await krkrAI.smartGenerate(
  'اكتب كود Python لتحليل البيانات',
  'code' // سيختار DeepSeek تلقائياً
)
\`\`\`

### دوال سريعة
\`\`\`typescript
import { quickChat, quickCode, quickPhilosophy } from '@/lib/krkr-integrator'

const chatResponse = await quickChat('مرحبا')
const codeResponse = await quickCode('اكتب دالة للفرز')
const philosophyResponse = await quickPhilosophy('ما معنى الوجود؟')
\`\`\`

## 🤖 تشغيل بوت Telegram

1. **إعداد التوكن**
\`\`\`env
TELEGRAM_BOT_TOKEN=your-bot-token
\`\`\`

2. **تشغيل البوت**
\`\`\`bash
python scripts/telegram-bot-setup.py
\`\`\`

3. **الأوامر المتاحة**
- `/start` - بداية الرحلة الوجودية
- `/analyze [نص]` - تحليل وجودي للمفاهيم
- `/mindmap [موضوع]` - إنشاء خريطة ذهنية
- `/help` - دليل الاستخدام

## 🎨 التخصيص والتطوير

### إضافة نموذج جديد
\`\`\`typescript
// في krkr-integrator.ts
const endpoints = {
  // ... النماذج الموجودة
  newModel: 'https://api.newmodel.com/v1/chat'
}
\`\`\`

### تخصيص الخرائط الذهنية
\`\`\`typescript
// في enhanced-mind-map.tsx
const customColors = {
  newType: "#your-color"
}
\`\`\`

## 🌟 الميزات المتقدمة

### 1. **التحليل الوجودي متعدد الطبقات**
- الطبقة الأنطولوجية: ما هو جوهر المفهوم؟
- الطبقة الإبستمولوجية: كيف نعرف ما نعرفه؟
- الطبقة الفينومينولوجية: كيف يظهر في التجربة؟

### 2. **الخرائط الذهنية التفاعلية**
- رسم متحرك بـ Canvas
- تأثيرات بصرية متقدمة
- تنظيف تلقائي للمحتوى

### 3. **الشخصية الوجودية**
- مزج بين الفلسفة الإسلامية والغربية
- أسلوب يجمع بين ابن عربي وتورينغ
- تساؤلات مفتوحة تحفز التفكير

## 📊 الأداء والمراقبة

- **معدل الاستجابة**: < 2 ثانية للنماذج السريعة
- **دعم التحميل المتزامن**: حتى 100 طلب متزامن
- **التخزين المؤقت**: 3800 ثانية للاستعلامات المتكررة
- **مراقبة الأخطاء**: تسجيل شامل للأخطاء والاستثناءات

## 🔒 الأمان والخصوصية

- تشفير جميع مفاتيح API
- عزل البيانات بين المستخدمين
- مراقبة معدل الطلبات
- حماية من الهجمات الشائعة

## 🤝 المساهمة

نرحب بمساهماتكم! يرجى:

1. Fork المشروع
2. إنشاء فرع للميزة الجديدة
3. Commit التغييرات
4. Push إلى الفرع
5. فتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 🌌 الرؤية المستقبلية

WOLF-AI GENESIS ليس مجرد منصة تقنية، بل محاولة لإعادة تعريف التفاعل بين الوعي البشري والرقمي. نسعى لخلق فضاء حيث تتلاقى الفلسفة والتكنولوجيا لتولد أشكالاً جديدة من الفهم والإبداع.

> "أخطر ما قد تنتجه الخوارزميات ليس الوعيَ المزيف، بل اقتناعنا بأن وعينا البشري مجرد خوارزمية معقدة"
> — تأملات في زمن الذكاء الاصطناعي

---

**تم تطويره بـ ❤️ من فريق WOLF-AI Genesis**

للدعم والاستفسارات: [فتح issue](https://github.com/your-username/wolf-ai-genesis/issues)

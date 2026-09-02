'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, MessageCircle } from 'lucide-react';

interface ShareSectionProps {
  onCopySuccess: (msg: string) => void;
}

export function ShareSection({ onCopySuccess }: ShareSectionProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const shareMessage = `السلام عليكم ورحمة الله وبركاته 🌿\n\nأدعوكم للمشاركة في هذا الموقع المبارك (صدقة جارية عن روحي المرحومين الحاج عوض إبراهيم رمضان شعلة والحاج محمد سويلم):\n📿 مسبحة إلكترونية تفاعلية\n📖 قراءة القرآن الكريم والاستماع له\n🤲 أدعية مأثورة للميت\n\nالدال على الخير كفاعله، شاركنا الأجر عبر الرابط التالي:\n${currentUrl}`;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      onCopySuccess('تم نسخ رابط الموقع بنجاح! شاركه واكسب الأجر');
    }
  };

  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="share" className="py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      <div className="p-8 sm:p-12 rounded-3xl bg-[#fdfbf7] dark:bg-[#0d231b] border-2 border-amber-500/30 shadow-md text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-500 to-amber-400 text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/20 p-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white fill-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
            <span>الدال على الخير كفاعله</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 dark:text-emerald-50 mb-4">
            انشر تؤجر • شارك الصفحة مع أحبابك
          </h2>

          <p className="text-base sm:text-lg text-emerald-900/80 dark:text-emerald-200/80 leading-relaxed mb-8">
            بمشاركتك هذا الرابط عبر واتساب أو نسخه، تكتب صدقة جارية مستمرة؛ فكل تسبيحة أو حرف يُقرأ بسببك يكون لك مثل أجره في ميزان حسناتك وميزان حسنات المرحومين «الحاج عوض إبراهيم رمضان شعلة» و«الحاج محمد سويلم».
          </p>

          {/* Social Share Buttons: Only WhatsApp and Copy Link */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4">
            {/* WhatsApp */}
            <button
              type="button"
              onClick={openWhatsApp}
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/10 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>مشاركة عبر واتساب</span>
            </button>

            {/* Copy Link */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-800 dark:bg-emerald-700 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/10 hover:scale-105 active:scale-95 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-amber-300" />
                  <span>تم نسخ الرابط!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 text-amber-300" />
                  <span>نسخ الرابط</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

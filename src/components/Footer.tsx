'use client';

import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="mt-auto border-t border-amber-500/20 bg-emerald-950 text-white pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-white flex items-center justify-center mx-auto mb-4 p-3">
            <svg
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-amber-300 fill-amber-300"
            >
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -7719.000000)" fill="currentColor">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M173.99029,7576.998 C171.388688,7576.998 169.058358,7575.74775 167.591892,7573.8028 C174.222522,7575.15916 180.17047,7569.27528 178.803103,7562.59159 C180.748048,7564.05806 181.998298,7566.38839 181.998298,7568.98999 C181.998298,7573.40541 178.405705,7576.998 173.99029,7576.998 M174.610911,7559 C176.076376,7560.36937 176.993293,7562.32032 176.993293,7564.48549 C176.993293,7571.32432 168.608909,7574.54254 164.0003,7569.60961 C164.32062,7574.84985 168.66997,7579 173.99029,7579 C179.518819,7579 184.0003,7574.51852 184.0003,7568.98999 C184.0003,7563.66967 179.85015,7559.32032 174.610911,7559"
                      id="moon-[#ffffff]"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          <h3 className="text-xl sm:text-3xl font-bold text-amber-400 mb-4">
            صدقة جارية عن روحي المرحومين «الحاج عوض إبراهيم رمضان شعلة» و«الحاج محمد سويلم»
          </h3>

          <p className="font-quran text-base sm:text-lg text-emerald-100/90 leading-relaxed mb-6">
            «اللَّهُمَّ اغْفِرْ لَهُمَا وَارْحَمْهُمَا، وَعَافِهِمَا وَاعْفُ عَنْهُمَا، وَأَكْرِمْ نُزُلَهُمَا، وَوَسِّعْ مُدْخَلَهُمَا، وَاجْعَلْ قَبْرَيْهِمَا رَوْضَةً مِنْ رِيَاضِ الْجَنَّةِ، وَاجْمَعْنَا بِهِمَا فِي الْفِرْدَوْسِ الأَعْلَى مِنْ غَيْرِ حِسَابٍ وَلَا سَابِقَةِ عَذَابٍ»
          </p>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-xl mx-auto">
            <p className="text-xs sm:text-sm text-emerald-200/90 italic font-quran">
              «إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ: إِلاَّ مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ»
            </p>
            <span className="text-[10px] text-amber-400 mt-1 block">[صحيح مسلم]</span>
          </div>
        </div>

        {/* Quick Links & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#tasbih" className="hover:text-amber-400 transition-colors">
              المسبحة الإلكترونية
            </a>
            <span>•</span>
            <a href="#quran" className="hover:text-amber-400 transition-colors">
              القرآن الكريم
            </a>
            <span>•</span>
            <a href="#hadith" className="hover:text-amber-400 transition-colors">
              الأحاديث النبوية
            </a>
            <span>•</span>
            <a href="#duas" className="hover:text-amber-400 transition-colors">
              الأدعية المأثورة
            </a>
            <span>•</span>
            <a href="#share" className="hover:text-amber-400 transition-colors">
              مشاركة الأجر
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
          >
            <span>إلى أعلى الصفحة</span>
            <ArrowUp className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Closing Copyright Notice */}
        <div className="mt-8 text-center text-[11px] text-emerald-400/60">
          <p>
            موقع إسلامي خيري • نسأل الله القبول والإخلاص • أُعد حباً وبراً ووفاءً
          </p>
        </div>
      </div>
    </footer>
  );
}

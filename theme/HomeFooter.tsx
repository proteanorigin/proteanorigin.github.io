// import { useSiteData } from '@rspress/runtime';

import { useLang } from "@rspress/runtime";

export function HomeFooter() {
  // const { site } = useSiteData();
  const lang = useLang();
  console.log('HomeFooter', lang);
  const message = lang === 'zh-CN'
    ? '© 2025 易象元 版权所有。'
    : '© 2025 PROTEAN ORIGIN Inc.';
  if (!message) {
    return null;
  }

  return (
    <footer className="rp-absolute rp-bottom-0 rp-mt-12 rp-py-8 rp-px-6 sm:rp-p-8 rp-w-full rp-border-t rp-border-solid rp-border-divider-light">
      <div className="rp-m-auto rp-w-full rp-text-center">
        <div
          className="rp-font-medium rp-text-sm rp-text-text-2"
          dangerouslySetInnerHTML={{
            __html: message,
          }}
        />
      </div>
    </footer>
  );
}
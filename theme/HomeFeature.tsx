import { normalizeHrefInRuntime, withBase } from '@rspress/runtime';
import type { Feature, FrontMatterMeta } from '@rspress/shared';
import { isExternalUrl } from '@rspress/shared';

// import { renderHtmlOrText } from '../../logic/utils';
import styles from './HomeFeature.module.scss';

const getGridClass = (feature: Feature): string => {
  const { span } = feature;
  switch (span) {
    case 2:
      return styles.grid2;
    case 3:
      return styles.grid3;
    case 4:
      return styles.grid4;
    case 6:
      return styles.grid6;
    case undefined:
      return styles.grid4;
    default:
      return '';
  }
};

export function HomeFeature({
  frontmatter,
}: {
  frontmatter: FrontMatterMeta;
  routePath: string;
}) {
  const features = frontmatter?.features;

  return (
    <div className="overflow-hidden m-auto flex flex-wrap max-w-6xl">
      {features?.map(feature => {
        const { icon, title, details, link: rawLink } = feature;

        let link = rawLink;
        if (rawLink) {
          link = isExternalUrl(rawLink)
            ? rawLink
            : normalizeHrefInRuntime(withBase(rawLink));
        }

        return (
          <div
            key={title}
            className={`${getGridClass(feature)} rounded hover:var(--rp-c-brand)`}
          >
            <div className="h-full p-2">
              <article
                key={title}
                className={`rspress-home-feature-card ${styles.featureCard} h-full rounded-4xl overflow-hidden border-transparent`}
                style={{
                  cursor: link ? 'pointer' : 'auto',
                }}
                onClick={() => {
                  if (link) {
                    window.location.href = link;
                  }
                }}
              >
                {icon ? (
                  <div className="flex items-center justify-center">
                    <div
                      className="rspress-home-feature-icon text-3xl text-center"
                    >
                      <img src={icon as string} alt={title} className="w-full h-full object-contain" />
                    </div>
                  </div>
                ) : null}

                <div className="p-8 py-2">
                  <h2 className="rspress-home-feature-title font-bold text-center">
                    {title}
                  </h2>
                  <p
                    className="rspress-home-feature-detail leading-6 pt-2 text-sm text-text-2 font-medium"
                  >
                    {details}
                  </p>
                </div>
              </article>
            </div>
          </div>
        );
      })}
    </div>
  );
}
import type { Tool } from '../types';
import { betriebssystemeTools } from './betriebssysteme';
import { buerosoftwareTools } from './buerosoftware';
import { browserTools } from './browser';
import { emailClientTools } from './email-clients';
import { emailServerTools } from './email-server';
import { cloudSpeicherTools } from './cloud-speicher';
import { passwortManagerTools } from './passwort-manager';
import { kommunikationTools } from './kommunikation';
import { videokonferenzenTools } from './videokonferenzen';
import { kalenderTools } from './kalender';
import { suchmaschinenTools } from './suchmaschinen';
import { socialMediaTools } from './social-media';
import { codeHostingTools } from './code-hosting';
import { ciCdTools } from './ci-cd';
import { containerTools } from './container';
import { datenbankenTools } from './datenbanken';
import { cmsTools } from './cms';
import { eCommerceTools } from './e-commerce';
import { analyticsTools } from './analytics';
import { monitoringTools } from './monitoring';
import { vpnTools } from './vpn';
import { firewallTools } from './firewall';
import { kiMlTools } from './ki-ml';
import { notizenTools } from './notizen';
import { projektmanagementTools } from './projektmanagement';
import { videoAudioTools } from './video-audio';
import { bildbearbeitungTools } from './bildbearbeitung';
import { zeiterfassungTools } from './zeiterfassung';
import { erpTools } from './erp';
import { crmTools } from './crm';
import { wikiTools } from './wiki';
import { backupTools } from './backup';
import { dnsAdblockTools } from './dns-adblock';
import { objektSpeicherTools } from './objekt-speicher';
import { medienserverTools } from './medienserver';
import { devToolsTools } from './dev-tools';
import { backendFrameworksTools } from './backend-frameworks';
import { ssgTools } from './ssg';
import { kartenTools } from './karten';
import { fotosTools } from './fotos';
import { emailAliasingTools } from './email-aliasing';
import { twoFactorAuthTools } from './2fa-authenticator';
import { fileEncryptionTools } from './file-encryption';
import { privacyFrontendsTools } from './privacy-frontends';
import { secureSharingTools } from './secure-sharing';
import { metadataRemovalTools } from './metadata-removal';
import { privacyOsTools } from './privacy-os';
import { browserExtensionsTools } from './browser-extensions';
import { curatedClassicsTools } from './curated-classics';
import { autoDiscoveredTools } from './auto-tools';

export const allTools: Tool[] = [
  ...betriebssystemeTools,
  ...buerosoftwareTools,
  ...browserTools,
  ...emailClientTools,
  ...emailServerTools,
  ...cloudSpeicherTools,
  ...passwortManagerTools,
  ...kommunikationTools,
  ...videokonferenzenTools,
  ...kalenderTools,
  ...suchmaschinenTools,
  ...socialMediaTools,
  ...codeHostingTools,
  ...ciCdTools,
  ...containerTools,
  ...datenbankenTools,
  ...cmsTools,
  ...eCommerceTools,
  ...analyticsTools,
  ...monitoringTools,
  ...vpnTools,
  ...firewallTools,
  ...kiMlTools,
  ...notizenTools,
  ...projektmanagementTools,
  ...videoAudioTools,
  ...bildbearbeitungTools,
  ...zeiterfassungTools,
  ...erpTools,
  ...crmTools,
  ...wikiTools,
  ...backupTools,
  ...dnsAdblockTools,
  ...objektSpeicherTools,
  ...medienserverTools,
  ...devToolsTools,
  ...backendFrameworksTools,
  ...ssgTools,
  ...kartenTools,
  ...fotosTools,
  ...emailAliasingTools,
  ...twoFactorAuthTools,
  ...fileEncryptionTools,
  ...privacyFrontendsTools,
  ...secureSharingTools,
  ...metadataRemovalTools,
  ...privacyOsTools,
  ...browserExtensionsTools,
  ...curatedClassicsTools,
  ...autoDiscoveredTools,
];

// Tool URLs end up in href/src attributes, and auto-discovered entries copy
// GitHub's free-text `homepage` field verbatim. Fail the build on anything that
// is not http(s) so a `javascript:` URL can never reach a page.
const URL_FIELDS = ['website', 'github', 'hostedService', 'logoUrl', 'previewImage'] as const;
for (const tool of allTools) {
  for (const field of URL_FIELDS) {
    const value = tool[field];
    if (value !== undefined && !/^https?:\/\//i.test(value)) {
      throw new Error(`Tool "${tool.slug}" has a non-http(s) ${field}: ${value}`);
    }
  }
}

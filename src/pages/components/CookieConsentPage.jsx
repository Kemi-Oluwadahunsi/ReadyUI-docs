import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";

const props = [
  { name: "message", type: "string", default: "—", description: "The consent message displayed to the user." },
  { name: "onAccept", type: "Function", default: "—", description: "Callback fired when the user accepts cookies." },
  { name: "onDecline", type: "Function", default: "—", description: "Callback fired when the user declines cookies." },
  { name: "onCustomize", type: "Function", default: "—", description: "Callback fired when the user clicks the customize button." },
  { name: "position", type: '"top" | "bottom"', default: '"bottom"', description: "Position of the banner on the viewport." },
  { name: "variant", type: '"banner" | "modal" | "floating"', default: '"banner"', description: "Visual presentation style of the consent UI." },
  { name: "showDecline", type: "boolean", default: "true", description: "Whether to show the decline button." },
  { name: "showCustomize", type: "boolean", default: "false", description: "Whether to show the customize preferences button." },
  { name: "acceptText", type: "string", default: '"Accept"', description: "Label for the accept button." },
  { name: "declineText", type: "string", default: '"Decline"', description: "Label for the decline button." },
  { name: "customizeText", type: "string", default: '"Customize"', description: "Label for the customize button." },
  { name: "privacyLink", type: "string", default: "—", description: "URL to your privacy policy page." },
  { name: "className", type: "string", default: "—", description: "Additional CSS class names for the root element." },
];

export default function CookieConsentPage() {
  return (
    <ComponentPage
      name="CookieConsent"
      description="GDPR-compliant cookie consent banner with multiple layout variants and customization options."
    >
      <Section title="Import">
        <CodeBlock code={`import { CookieConsent } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock
          code={`<CookieConsent
  message="We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies."
  onAccept={() => console.log("Accepted")}
  onDecline={() => console.log("Declined")}
  privacyLink="/privacy"
/>`}
        />
      </Section>

      <Section title="Modal Variant">
        <CodeBlock
          code={`<CookieConsent
  variant="modal"
  message="This website uses cookies to ensure you get the best experience."
  onAccept={handleAccept}
  onDecline={handleDecline}
  showDecline={true}
  privacyLink="/privacy-policy"
/>`}
        />
      </Section>

      <Section title="With Customization">
        <CodeBlock
          code={`<CookieConsent
  variant="floating"
  position="bottom"
  message="We value your privacy. Manage your cookie preferences below."
  onAccept={handleAcceptAll}
  onDecline={handleDeclineAll}
  onCustomize={openPreferencesModal}
  showCustomize={true}
  acceptText="Accept All"
  declineText="Reject All"
  customizeText="Manage Preferences"
  privacyLink="/privacy"
/>`}
        />
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}

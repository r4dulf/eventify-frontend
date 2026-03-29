import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

export const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="eventify_cookie_consent"
    >
      We use cookies to improve your experience. Read our{" "}
      <Link to="/privacy-policy">Privacy Policy</Link>.
    </CookieConsent>
  );
};

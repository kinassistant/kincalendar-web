const EffectiveAcceptanceEligibility: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Effective */}
      <div className="space-y-4">
        <p className="font-medium">
          Effective Date: <span className="font-semibold">3/8/2025</span>
        </p>
        <p className="terms-paragraph">
          Thank you for choosing KIN – Delightful Family Calendar
          (&quot;KIN,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of the KIN services, including our website, mobile application(s),
          and any related features or content (collectively, the
          &quot;Service&quot;). By using KIN, you agree to these Terms. If you
          do not agree, you must not use the Service.
        </p>
      </div>
      {/* Acceptance */}
      <div className="space-y-3">
        <h4 className="terms-title">1. Acceptance of Terms</h4>
        <p className="terms-paragraph">
          By creating an account or otherwise using KIN, you acknowledge that
          you have read, understood, and agree to be bound by these Terms, our 
          <span className="underline">Privacy Policy</span>, and any additional
          policies referenced within. If you do not agree, you must discontinue
          use immediately.
        </p>
      </div>

      {/* Eligibility */}
      <div className="space-y-3">
        <h4 className="terms-title">2. Eligibility</h4>
        <ul className="list-disc pl-6 terms-paragraph">
          <li>
            You must be at least the age of majority in your jurisdiction, or
            have consent from a parent or guardian to use this Service.
          </li>
          <li>
            You may use KIN only in compliance with all applicable laws and
            regulations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EffectiveAcceptanceEligibility;

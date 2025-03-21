const AccountAndServices: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Account */}
      <div className="space-y-3">
        <h4 className="terms-title">3. User Accounts</h4>
        <ul className="list-decimal pl-6 terms-paragraph">
          <li>Account Registration</li>
          <li>
            You may need to create an account to access certain features. You
            agree to provide
          </li>

          <li>accurate and complete information.</li>
          <li>Account Responsibility</li>
          <li>
            You are responsible for all activity on your account. Keep your
            login credentials{" "}
          </li>
          <li>confidential to avoid unauthorized use.</li>
          <li>Account Termination</li>

          <li>
            You may delete your account at any time. We reserve the right to
            suspend or terminate accounts for violation of these Terms or other
            improper use.
          </li>
        </ul>
      </div>

      {/* service */}
      <div className="space-y-3">
        <h4 className="terms-title">4. Use of the Service</h4>
        <ol className="space-y-2 list-decimal pl-6">
          <li className="space-y-1">
            <h5 className="font-semibold">License</h5>
            <p className="pl-6 terms-paragraph">
              Subject to these Terms, KIN grants you a non-exclusive,
              non-transferable, revocable license to use the Service for your
              personal, non-commercial purposes.
            </p>
          </li>
          <li className="space-y-1">
            <h5 className="font-semibold">Restrictions</h5>
            <div className="pl-6">
              <p className="terms-paragraph">You agree not to:</p>
              <ul className="list-disc pl-12 terms-paragraph">
                <li>
                  Reverse engineer, decompile, or disassemble any aspect of the
                  Service.
                </li>
                <li>
                  Use the Service for any illegal or unauthorized purpose.
                </li>
                <li>
                  Upload or transmit any harmful code or content that may damage
                  the Service or interfere with other users.
                </li>
              </ul>
            </div>
          </li>
          <li className="space-y-1">
            <h5 className="font-semibold">Modifications and Availability</h5>
            <p className="pl-6 terms-paragraph">
              We may add, change, or remove features at our discretion, and we
              make no guarantee of continuous, uninterrupted availability.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AccountAndServices;

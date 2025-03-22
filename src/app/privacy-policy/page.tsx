export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="pt-[80px] md:pt-[132px] pb-[60px] md:pb-20 max-w-[792px] mx-auto px-6 lg:px-0">
        <h3 className="text-[32px] font-semibold leading-10">Privacy Policy</h3>
        <div className="mt-6 space-y-8">
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              Effective Date: {new Date().toLocaleDateString()}
            </p>

            <p>
              Thank you for using{" "}
              <strong>KIN – Delightful Family Calendar</strong>{" "}
              (&quot;KIN,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;). Your privacy is important to us. This Privacy
              Policy explains how we collect, use, store, and protect your
              personal data in connection with the KIN services
              (&quot;Service&quot;).
            </p>

            <hr className="my-8" />

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              KIN is designed to help families manage their schedules
              conveniently and securely. We do <strong>not</strong> rely on
              selling user data; instead, our revenue model will be based on a
              subscription fee in the future. By using KIN, you acknowledge that
              you have read and understood this Privacy Policy.
            </p>

            <hr className="my-8" />

            <h2 className="text-xl font-semibold mt-8 mb-4">
              2. Information We Collect
            </h2>
            <ol className="list-decimal ml-8 mb-4">
              <li className="mb-2">
                <strong>Account Data</strong>
                <br />
                When you create a KIN account, we may collect your name, email
                address, and other information necessary to set up your profile.
              </li>
              <li className="mb-2">
                <strong>Calendar & Event Data</strong>
                <br />
                We collect details about your events, schedules, and other
                calendar-related information you provide.
              </li>
              <li className="mb-2">
                <strong>Photos & Voice Interactions</strong>
                <br />
                If you use our photo-to-event or voice-first features, we
                process those inputs to create or modify your events.
              </li>
              <li className="mb-2">
                <strong>Usage Data</strong>
                <br />
                We may collect information about how you interact with the
                Service, such as the features you use and the time you spend
                using them. This data may be anonymized and aggregated to
                improve our Service.
              </li>
            </ol>

            <hr className="my-8" />

            <h2 className="text-xl font-semibold mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc ml-8 mb-4">
              <li className="mb-2">
                <strong>Provide and Maintain the Service</strong>
                <br />
                We use your personal data to operate and maintain the core
                functionalities of KIN, including creating and modifying
                calendar events.
              </li>
              <li className="mb-2">
                <strong>Improve Our Services</strong>
                <br />
                We may use anonymized usage data to enhance and optimize our
                features, user experience, and overall Service performance.
              </li>
              <li className="mb-2">
                <strong>Future Subscription Services</strong>
                <br />
                We may use your account data to facilitate billing or
                subscription management if and when paid subscription plans are
                introduced.
              </li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-xl font-semibold mt-8 mb-4">
              4. Data Storage and Transfer
            </h2>
            <ul className="list-disc ml-8 mb-4">
              <li className="mb-2">
                <strong>Secure Backend (Supabase)</strong>
                <br />
                All user data is stored in our secure backend powered by
                Supabase. We employ reasonable security measures to safeguard
                your data against loss, theft, and unauthorized access.
              </li>
              <li className="mb-2">
                <strong>LLM Providers</strong>
                <br />
                In certain scenarios (e.g., voice processing, advanced text
                analysis), we may send snippets of your data to Large Language
                Model (LLM) providers solely for processing. These providers do{" "}
                <strong>not</strong> retain or use your data to train future AI
                models.
              </li>
              <li className="mb-2">
                <strong>International Data Transfers</strong>
                <br />
                Depending on your location, your data may be transferred to or
                stored on servers located outside of your country. We strive to
                comply with all relevant data protection laws for these
                transfers.
              </li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-xl font-semibold mt-8 mb-4">
              5. Sharing Your Data
            </h2>
            <ul className="list-disc ml-8 mb-4">
              <li className="mb-2">
                <strong>No Selling of Data</strong>
                <br />
                We do <strong>not</strong> sell, trade, or rent your personal
                data to third parties.
              </li>
              <li className="mb-2">
                <strong>Service Providers</strong>
                <br />
                We may share data with trusted third-party providers (including
                LLM providers) only as necessary to facilitate our features and
                operations. These providers are contractually bound to maintain
                confidentiality and data security.
              </li>
              <li className="mb-2">
                <strong>Legal Compliance</strong>
                <br />
                We may disclose data if required to do so by law, subpoena, or
                other legal process, or if we believe such action is necessary
                to protect our rights or the safety of our users.
              </li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-xl font-semibold mt-8 mb-4">
              6. Retention of Data
            </h2>
            <p>
              We retain your personal data for as long as you maintain an
              account with us or as needed to provide you with the Service.
              Anonymized, aggregated data may be retained indefinitely to help
              us understand usage patterns and improve KIN.
            </p>

            <hr className="my-8" />

            <h2 className="text-xl font-semibold mt-8 mb-4">
              7. Deleting Your Data
            </h2>
            <p>
              You can request the deletion of your KIN account at any time. When
              you delete your account, we remove your personal information from
              our systems and backups in a secure manner, subject to any legal
              or compliance requirements.
            </p>

            <hr className="my-8" />

            <h2 className="text-xl font-semibold mt-8 mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p>
              KIN is designed for family use, which may include children under
              the supervision of a parent or guardian. We do not knowingly
              collect personal information from children without appropriate
              parental consent.
            </p>

            <hr className="my-8" />

            <h2 className="text-xl font-semibold mt-8 mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. If
              we make material changes, we will provide notice (e.g., via email
              or a prominent notice within the Service). Your continued use of
              KIN after any updates constitute acceptance of the revised policy.
            </p>

            <hr className="my-8" />

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy,
              please reach out:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>
                <strong>Email</strong>: owner@fungee.llc
              </li>
            </ul>

            <hr className="my-8" />

            <p>
              By using KIN, you agree to this Privacy Policy. Thank you for
              trusting us to keep your scheduling and data safe. If you have any
              questions or feedback, we&apos;re here to help.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

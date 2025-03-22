const SubscriptionContent: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Account */}
      <div className="space-y-3">
        <h4 className="terms-title">5. Subscription and Fees</h4>
        <ul className="list-disc pl-6">
          <li className="font-semibold">Future Subscription</li>
          <p className="terms-paragraph">
            While KIN may currently be offered for free, we reserve the right to
            introduce subscription fees or other paid features in the future.
            Users will be notified of any payment requirements or changes to
            pricing.
          </p>
        </ul>
      </div>

      {/* service */}
      <div className="space-y-3">
        <h4 className="terms-title">6. User Content</h4>
        <ol className="space-y-2 list-decimal pl-6">
          <li className="space-y-1">
            <h5 className="font-semibold">Ownership</h5>
            <p className="pl-6 terms-paragraph">
              You retain ownership of any content you submit (e.g., calendar
              events, photos). However, by submitting content through the
              Service, you grant KIN a worldwide, non-exclusive, royalty-free
              license to use, store, and process that content as necessary to
              provide the Service.
            </p>
          </li>
          <li className="space-y-1">
            <h5 className="font-semibold">Responsibility</h5>
            <p className="pl-6 terms-paragraph">
              You are solely responsible for any content you submit. You warrant
              that you have the right to share such content and that it does not
              violate any laws or third-party rights.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SubscriptionContent;

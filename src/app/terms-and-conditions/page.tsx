import AccountAndServices from "@/components/TermsAndConditions/AccountAndServices";
import EffectiveAcceptanceEligibility from "@/components/TermsAndConditions/EffectiveAcceptanceEligibility";
import SubscriptionContent from "@/components/TermsAndConditions/SubscriptionContent";

export default function TermsAndCondition() {
  return (
    <>
      <div className="pt-[80px] md:pt-[132px] pb-[60px] md:pb-20 max-w-[792px] mx-auto px-6 lg:px-0">
        <h3 className="text-[32px] font-semibold leading-10">
          Terms and Conditions
        </h3>
        <div className="mt-6 space-y-8">
          <EffectiveAcceptanceEligibility />
          <AccountAndServices />
          <SubscriptionContent />
        </div>
      </div>
    </>
  );
}

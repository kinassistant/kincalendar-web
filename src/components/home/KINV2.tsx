import KinComingSoon from "./KinComingSoon";

const KINV2: React.FC = () => {
  return (
    <section id="kin-v2">
      <div className="max-w-[792px] mx-auto px-6 lg:px-0 pt-[60px] md:pt-[120px] flex flex-col md:flex-row items-start gap-6 md:gap-10 justify-between">
        <div className="max-w-max md:max-w-[248px] space-y-4">
          <h4 className="section-title">What’s coming to KIN v2</h4>
          <p className="section-sub-title">
            We’re listening to you! Your feedback shapes what’s next.
          </p>
        </div>
        <KinComingSoon />
      </div>
    </section>
  );
};

export default KINV2;

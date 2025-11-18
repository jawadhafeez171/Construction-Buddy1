import React, { useState } from 'react';
import RupeeCoinIcon from '../components/icons/RupeeCoinIcon';
import SubmitReferralIcon from '../components/icons/SubmitReferralIcon';
import ProjectConfirmIcon from '../components/icons/ProjectConfirmIcon';
import GetRewardedIcon from '../components/icons/GetRewardedIcon';

const Step: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="w-24 h-24 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mb-4 border-4 border-background shadow-lg">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);

const ReferralPage: React.FC = () => {
  const [formState, setFormState] = useState({
    yourName: '',
    yourPhone: '',
    friendName: '',
    friendPhone: '',
    friendEmail: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      console.log('Referral Submitted:', formState);
      setStatus('success');
    }, 1500);
  };
    
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/referral-hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl">
            Share the Success. Get Rewarded.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Love our work? Refer a friend to Construction Buddy and earn exciting rewards for every successful project.
          </p>
          <a href="#referral-form" className="mt-8 inline-block bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-lg">
            Refer Now
          </a>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Earning Rewards is Simple</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Follow these three easy steps to get started.</p>
        </div>
        <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 w-full border-t-2 border-dashed border-border"></div>
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
                <Step 
                    icon={<SubmitReferralIcon className="h-12 w-12" />}
                    title="1. Submit Referral"
                    description="Fill out the form below with your and your friend's details. We'll reach out to them."
                />
                <Step 
                    icon={<ProjectConfirmIcon className="h-12 w-12" />}
                    title="2. Project Confirmation"
                    description="Once your friend signs a project contract with us and pays the advance, your reward is confirmed."
                />
                <Step 
                    icon={<GetRewardedIcon className="h-12 w-12" />}
                    title="3. Get Rewarded!"
                    description="You receive your referral bonus based on the project value. It's that easy!"
                />
            </div>
        </div>
      </section>

      {/* Reward Tiers Section */}
      <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">More Referrals, More Money!</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="bg-card p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform duration-300 hover:-translate-y-2 border border-border">
                      <div className="flex-shrink-0"><RupeeCoinIcon count={1} /></div>
                      <div>
                          <h3 className="text-xl font-bold text-card-foreground">1st Referral</h3>
                          <p className="text-muted-foreground mt-1">Earn 0.5% of the Project Value*</p>
                      </div>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform duration-300 hover:-translate-y-2 border border-border">
                       <div className="flex-shrink-0"><RupeeCoinIcon count={2} /></div>
                      <div>
                          <h3 className="text-xl font-bold text-card-foreground">2nd Referral</h3>
                          <p className="text-muted-foreground mt-1">Earn 0.75% of the Project Value*</p>
                      </div>
                  </div>
                  <div className="relative bg-card p-6 rounded-lg shadow-2xl flex items-center space-x-4 transition-transform duration-300 hover:-translate-y-2 border-2 border-tertiary">
                       <div className="absolute top-0 right-4 -mt-3 bg-tertiary text-tertiary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Best Value</div>
                      <div className="flex-shrink-0"><RupeeCoinIcon count={3} /></div>
                      <div>
                          <h3 className="text-xl font-bold text-card-foreground">3 + Referrals</h3>
                          <p className="text-muted-foreground mt-1">Earn 1% of the Project Value*</p>
                      </div>
                  </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">*Actual earnings depend on successful referrals and project value, capped at ₹1,00,000 per referral.</p>
          </div>
      </section>

      {/* Referral Form Section */}
      <section id="referral-form" className="py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-card p-8 sm:p-10 rounded-xl shadow-2xl border border-border">
                    {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center h-full text-center py-10">
                        <svg className="w-16 h-16 text-success mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-card-foreground">Referral Sent!</h3>
                        <p className="text-muted-foreground mt-2">Thank you for your referral. We'll be in touch with your friend shortly and will update you on the progress.</p>
                    </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-card-foreground">Refer Someone Today</h3>
                            <p className="text-muted-foreground mt-2">Fill in the details below to get started.</p>
                        </div>
                        <div>
                            <label htmlFor="yourName" className="block text-sm font-medium text-muted-foreground">Your Name</label>
                            <input type="text" name="yourName" id="yourName" required value={formState.yourName} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary" />
                        </div>
                        <div>
                            <label htmlFor="yourPhone" className="block text-sm font-medium text-muted-foreground">Your Phone Number</label>
                            <input type="tel" name="yourPhone" id="yourPhone" required value={formState.yourPhone} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary" />
                        </div>
                         <hr className="my-6 border-t-2 border-dashed border-border"/>
                        <div>
                            <label htmlFor="friendName" className="block text-sm font-medium text-muted-foreground">Friend's Name</label>
                            <input type="text" name="friendName" id="friendName" required value={formState.friendName} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary" />
                        </div>
                        <div>
                            <label htmlFor="friendPhone" className="block text-sm font-medium text-muted-foreground">Friend's Phone Number</label>
                            <input type="tel" name="friendPhone" id="friendPhone" required value={formState.friendPhone} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary" />
                        </div>
                         <div>
                            <label htmlFor="friendEmail" className="block text-sm font-medium text-muted-foreground">Friend's Email (Optional)</label>
                            <input type="email" name="friendEmail" id="friendEmail" value={formState.friendEmail} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary" />
                        </div>
                        <div className="pt-4">
                            <button type="submit" disabled={status === 'loading'} className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-secondary-foreground bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-muted disabled:text-muted-foreground transition-colors duration-300">
                                {status === 'loading' ? 'Submitting...' : 'Submit Referral'}
                            </button>
                        </div>
                    </form>
                    )}
                </div>
            </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md border border-border">
            <h2 className="text-2xl font-bold text-card-foreground text-center mb-6">Terms & Conditions</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-3 text-sm">
                <li>A referral is considered successful only after the referred client signs a formal project agreement and pays the initial advance amount.</li>
                <li>The referral reward is based on a tiered percentage of the project value (0.5% for the 1st, 0.75% for the 2nd, and 1% for 3+) and is capped at a maximum of ₹1,00,000 per successful referral.</li>
                <li>The reward will be disbursed within 30 days of the project advance being cleared.</li>
                <li>You cannot refer yourself or existing clients.</li>
                <li>Construction Buddy reserves the right to modify or terminate this program at any time without prior notice.</li>
            </ul>
        </div>
      </section>

    </div>
  );
};

export default ReferralPage;
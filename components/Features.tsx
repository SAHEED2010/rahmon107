import React from 'react';

const features = [
  {
    title: 'Earn Badges & Climb the Leaderboard',
    description: 'Get rewarded for every order you make. Unlock badges, track your progress, and compete with friends as you enjoy fast, reliable deliveries.',
    icon: '🏆'
  },
  {
    title: 'Refer Friends & Earn Rewards',
    description: 'Share your unique referral code and get instant bonuses when your friends sign up and place their first order. More invites = more rewards.',
    icon: '🤝'
  },
  {
    title: 'Track Your Orders in Real Time',
    description: 'Know exactly where your rider is at every moment. From pickup to drop-off, SuddenGo gives you live delivery updates so you stay informed.',
    icon: '📍'
  },
  {
    title: 'Access Quick Micro-Loans Instantly',
    description: 'Unlock flexible micro-loans based on your app activity and referrals. Build your score as you order, earn badges, and climb the leaderboard',
    icon: '🏦'
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-[#7a1c0e] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <h2 className="text-3xl md:text-5xl font-black max-w-md leading-tight">
            Explore Powerful Features Built for Your Daily Convenience
          </h2>
          <p className="text-xl text-white/80 max-w-xl font-medium leading-relaxed">
            SuddenGo is more than delivery — it’s a complete lifestyle and financial super-app. Enjoy real-time tracking, secure payments, referral rewards, and access to in-app micro-loans designed for everyday convenience.
          </p>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-12 scrollbar-hide snap-x">
        {features.map((feature, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[400px] bg-[#ff4d1c] rounded-[3rem] p-10 flex flex-col snap-start relative overflow-hidden group h-[600px]">
            <h3 className="text-3xl font-black mb-6 leading-tight relative z-10">
              {feature.title}
            </h3>
            <p className="text-white/90 text-lg font-medium leading-relaxed mb-8 relative z-10">
              {feature.description}
            </p>
            
            <div className="mt-auto relative z-10 px-4">
                {/* Mock iPhone App Screen */}
                <div className="w-full aspect-[9/16] bg-white rounded-t-[2.5rem] shadow-2xl overflow-hidden border-x-[6px] border-t-[6px] border-[#333]">
                    <div className="h-full w-full p-4 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-black/40 text-[10px] font-bold">10:55</div>
                            <div className="w-12 h-4 bg-black rounded-full" />
                            <div className="text-black/40 text-[10px]">🔋</div>
                        </div>
                        <div className="text-black font-black text-sm mb-4">{feature.title.split(' & ')[0]}</div>
                        <div className="flex-1 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl">
                            {feature.icon}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background design */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
};

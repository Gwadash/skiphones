import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const REFERRAL_KEY = "sk_referral_code";

export const useReferralCapture = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) {
      localStorage.setItem(REFERRAL_KEY, ref);
    }
  }, [searchParams]);
};

export const getReferralCode = (): string | null => {
  return localStorage.getItem(REFERRAL_KEY);
};

export const clearReferralCode = () => {
  localStorage.removeItem(REFERRAL_KEY);
};

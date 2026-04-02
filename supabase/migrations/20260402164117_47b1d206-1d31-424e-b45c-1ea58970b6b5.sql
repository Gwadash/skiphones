
DROP POLICY "System can insert referrals" ON public.referrals;

CREATE POLICY "Referred users can insert referrals"
ON public.referrals FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = referred_user_id);

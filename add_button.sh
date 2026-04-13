#!/bin/bash
button='<!-- Floating Call Button -->
<a href="tel:512-580-8724" class="floating-call-button" title="Call Fast Austin Locksmith">
<i class="fa fa-phone" aria-hidden="true"></i>
</a>'

files=("_downloads.html" "aboutus.html" "auto.html" "blog.html" "commercial.html" "contact.html" "deadbolt-replacement-austin-tx.html" "easy-ways-to-program-and-replace-car-remotes.html" "five-steps-to-find-a-reliable-locksmith.html" "how-master-key-systems-work.html" "how-to-choose-the-right-locks-for-your-home.html" "how-to-rekey-a-car-key.html" "how-to-tell-if-your-lock-has-been-picked.html" "ignition-replacement-austin-tx.html" "key-cutting-austin-tx-key-makers.html" "key-fob-programming-austin-tx.html" "key-replacement-austin-tx.html" "key-replacement-buda-tx.html" "key-replacement-cedar-park-tx.html" "key-replacement-del-valle-tx.html" "key-replacement-georgetown-tx.html" "key-replacement-kyle-tx.html" "key-replacement-leander-tx.html" "lock-replacement-change-austin-tx.html" "locksmith-austin-tx.html" "locksmith-buda-tx.html" "locksmith-cedar-park-tx.html" "locksmith-del-valle-tx.html" "locksmith-georgetown-tx.html" "locksmith-kyle-tx.html" "locksmith-leander-tx.html" "locksmith-pflugerville-tx.html" "locksmith-round-rock-tx.html" "locksmith-taylor-tx.html" "privacy.html" "rekeying-vs-replacing-your-locks.html" "residential.html" "review.html" "safe-unlocking-austin-tx.html" "service.html" "serviceareas.html" "simple-ways-to-get-a-broken-key-out-of-a-lock.html" "sitemap.html" "ultimate-guide-to-getting-a-new-car-key.html" "ways-to-open-a-locked-car-with-keys-inside.html" "ways-to-prevent-car-lockout.html" "what-is-key-fob-and-how-it-works.html" "what-you-need-for-an-eviction-lockout.html")

count=0
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    if ! grep -q "floating-call-button" "$file"; then
      sed -i 's|</body>|'"$button"'\n</body>|' "$file"
      ((count++))
      echo "✓ $file"
    fi
  fi
done
echo "Total updated: $count"

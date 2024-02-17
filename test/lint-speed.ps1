$timec0 = get-date -UFormat %s
pnpm eslint -c ./configs/eslint.check.js .
$timec1 = get-date -UFormat %s
$timec = $timec1 - $timec0
echo check: $timec

$times0 = get-date -UFormat %s
pnpm eslint -c ./configs/eslint.style.js .
$times1 = get-date -UFormat %s
$times = $times1 - $times0
echo style: $times

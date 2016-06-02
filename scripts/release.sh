# Variables:
SHA=`git rev-parse --verify HEAD`

# 0. This script is run by .travis.yml after merge to master.

# 1. Build release files
npm run build

# 2. Set credentials if script run from CI
git config user.name || git config user.name "Travis CI"
git config user.email || git config user.email "travis@voloshins.js.org"
# 3. Remove dist/ folder from .gitignore
sed -i.bak '/build/d' .gitignore
# 4. Add release files to new branch
# git branch | grep releases && git branch -D releases
# git checkout -b releases
git add --all
git commit -m "Released after: ${SHA}"
# git push origin releases -f

# 5. After that travis will automatically deploy from releases branch to deis repo.

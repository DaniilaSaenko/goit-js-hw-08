user@home-nb-1 MINGW64 /e/goit-js-hw-08 (main) $ git status On branch main Your
branch is up to date with 'origin/main'.

nothing to commit, working tree clean

user@home-nb-1 MINGW64 /e/goit-js-hw-08 (main) $ git remote -v origin
https://github.com/goitacademy/parcel-project-template.git (fetch) origin
https://github.com/goitacademy/parcel-project-template.git (push)

user@home-nb-1 MINGW64 /e/goit-js-hw-08 $ git init Initialized empty Git
repository in E:/goit-js-hw-08/.git/

user@home-nb-1 MINGW64 /e/goit-js-hw-08 (master) $ git status On branch master

No commits yet

Untracked files: (use "git add <file>..." to include in what will be committed)
.editorconfig .github/ .gitignore .htmlnanorc .parcelrc .posthtmlrc .prettierrc
.sassrc README.en.md README.es.md README.md README.pl.md README.uk.md assets/
package-lock.json package.json src/

nothing added to commit but untracked files present (use "git add" to track)

user@home-nb-1 MINGW64 /e/goit-js-hw-08 (master) $ git remote -v

user@home-nb-1 MINGW64 /e/goit-js-hw-08 (master) $ git remote add origin
https://github.com/DaniilaSaenko/goit-js-hw-08.git

user@home-nb-1 MINGW64 /e/goit-js-hw-08 (master) $ git remote -v origin
https://github.com/DaniilaSaenko/goit-js-hw-08.git (fetch) origin
https://github.com/DaniilaSaenko/goit-js-hw-08.git (push)

user@home-nb-1 MINGW64 /e/goit-js-hw-08 (master) $ git commit -m "DZ-08" On
branch master

Initial commit

Untracked files: (use "git add <file>..." to include in what will be committed)
.editorconfig .github/ .gitignore .htmlnanorc .parcelrc .posthtmlrc .prettierrc
.sassrc README.en.md README.es.md README.md README.pl.md README.uk.md assets/
package-lock.json package.json src/

nothing added to commit but untracked files present (use "git add" to track)

user@home-nb-1 MINGW64 /e/goit-js-hw-08 (master) $ git add .

user@home-nb-1 MINGW64 /e/goit-js-hw-08 (master) $ git commit -m "first commit"
[master (root-commit) 65bfd0b] first commit 27 files changed, 5877 insertions(+)
create mode 100644 .editorconfig create mode 100644 .github/workflows/deploy.yml
create mode 100644 .gitignore create mode 100644 .htmlnanorc create mode 100644
.parcelrc create mode 100644 .posthtmlrc create mode 100644 .prettierrc create
mode 100644 .sassrc create mode 100644 README.en.md create mode 100644
README.es.md create mode 100644 README.md create mode 100644 README.pl.md create
mode 100644 README.uk.md create mode 100644 assets/actions-config-step-1.png
create mode 100644 assets/actions-config-step-2.png create mode 100644
assets/how-it-works.png create mode 100644 assets/repo-settings.png create mode
100644 assets/status.png create mode 100644 package-lock.json create mode 100644
package.json create mode 100644 src/images/logo.png create mode 100644
src/index.html create mode 100644 src/index.js create mode 100644
src/partials/example.html create mode 100644 src/sass/\_common.scss create mode
100644 src/sass/\_example.scss create mode 100644 src/sass/index.scss

user@home-nb-1 MINGW64 /e/goit-js-hw-08 (master) $ git push origin master

Enumerating objects: 35, done. Counting objects: 100% (35/35), done. Delta
compression using up to 4 threads Compressing objects: 100% (27/27), done.
Writing objects: 100% (35/35), 1.21 MiB | 1.61 MiB/s, done. Total 35 (delta 0),
reused 0 (delta 0), pack-reused 0 To
https://github.com/DaniilaSaenko/goit-js-hw-08.git

- [new branch] master -> master

user@home-nb-1 MINGW64 /e/goit-js-hw-08 (master)

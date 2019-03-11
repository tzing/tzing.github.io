---
title: clover
image: assets/repos/clover.png
description: 🍀 a configurable zsh theme
create: 2018-04-17
github: tzing/dotFiles
tags:
  - zsh
  - shell
---

Clover is a configurable theme for [oh-my-zsh].

[oh-my-zsh]: https://github.com/robbyrussell/oh-my-zsh


## Feature

- User name
- Machine name
    - change color on remote session
- Current working directory
- Git
    - current branch
    - status
        * `✔` — clean branch
        * `✘` — dirty branch
        * `+` — added files
        * `-` — deleted files
        * `*` — modified files
        * `>` — renamed files
        * `=` — unmerged changes
        * `?` — untracked changes
        * `⇡` — ahead of remote branch
        * `⇣` — behind of remote branch
        * `⇕` — diverged chages
    - works async
- Execution time
- Current time
- Python virtualenv
- Prompt indicator changes if the last run fails (🍀/🔥)

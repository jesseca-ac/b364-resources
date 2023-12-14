# 231221 - Batch 364:  Academic Reading List 


### **Topics**

- **Git - Merge**
  - [Pro Git - Chapter 6: Git Branching - Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
  - [Atlassian Git Tutorial - Basic Branching and Merging](https://www.atlassian.com/git/tutorials/using-branches/git-merge)


### **Purpose**

- **Understand the fundamentals of merging in Git:**
  - Learn how merging works in Git.
  - Understand different merge strategies and when to use them.
  - Grasp the concept of conflicts during merging.



### **Goal to Checking**

- **Master the merging process:**
  - **Note: Use your personal repository i.e, GitLab or GitHub.**
  - Demonstrate the ability to create and switch between branches in Git.
    1. Create a new branch named "feature-branch" using the command: `git branch feature-branch`.
    2. Switch to the newly created branch: `git checkout feature-branch` or `git switch feature-branch`.
    3. Confirm you are on the "feature-branch" by using the command: `git branch`.
  - Successfully merge branches using both fast-forward and recursive strategies.
    1. Merge the "feature-branch" into the main branch using the fast-forward merge strategy.
        - Use the command: `git checkout main` followed by `git merge feature-branch`.
    2. Merge the "feature-branch" into the main branch using the recursive merge strategy.
        - Use the command: `git checkout main` followed by `git merge --no-ff feature-branch`.
  - Resolve merge conflicts efficiently when they occur.
    1. Create a new branch named "conflict-branch" from the main branch.
       - Use the command: `git branch conflict-branch` and switch to it.
    2. Make conflicting changes in both "conflict-branch" and "main" branches.
    3. Attempt to merge "conflict-branch" into "main" and resolve the merge conflict using a merge tool or manual edits.
       - Use the commands: `git checkout main` and `git merge conflict-branch`.

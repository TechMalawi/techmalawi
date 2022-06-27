# Contributing to TechMalawi Official Web Site

You can contribute to this project with issues and PRs. Simply filling in an issue is a great way to contribute. Implementation contribution is greatly appreciated.

# Contributing Changes

Project maintainers will merge changes that improve the website significantly and broadly align with the designs by the UI/UX team.

### Suggested Workflow

1. Create an issue for your work.
   - You can skip this for trial changes
   - Reuse an existing issue on the topic, if there is one.
   - Clearly state that you are going to take on implementing it, if that's the case. You can request that the issue be assigned to you. Note: The issue filer and the implementer don't have be the person.
2. Create a personal fork of the repository on GitHub (if you don't already have one).
3. In your fork, create a new branch (`git checkout -b mybranch`).

   - Name the branch so that it clearly comminucates your intention, such as `yourname/issue-123` or `yourname/homepage-issue`.
   - Branches are useful since they isolate your changes from the upstream. They also enable you to create multiple PRs from the same fork.

4. Make and commit your changes to your brance.
   - Commit messages should follow this covention for easy tracking of changes made. `[ISSUE-xxxx] - brief description of changes made`
5. Add new tests corresponding to your change, if applicable.
6. Build the repository with your changes.
   - Make sure that builds are clean.
   - Make sure that all tests pass, including your new tests.
7. Create a pull request (PR) against the TechMalawi/techmalawi repository's **main** branch.

   - State in the description what issue or improvement your change is addressing.

8. Wait for feedback or approval of your changes from the maintainers.
9. When the area owners have signed off and all the checks are green, your PR will be merged.
   - The next official build will automatically include your change.
   - Delete the branch you used making the change.

Feature: Epam Contact form

    @ignore
    Scenario: Scenario name
        Given   I navigate to HomePage
        When    I click to Contact button
        Then    I Accept Cookies
        Then    I fill the form out
            | InquiryReason | Talk to Sales in North America |
            | Name          | Benjamin                       |
            | LastName      | Arce                           |
            | Email         | barce@outlook.com              |
            | Telephone     | 33-12-34-56-78                 |
            | Company       | Epam                           |
            | Position      | C-Level                        |
            | Country       | United States                  |
            | State         | Alabama                        |
            | City          | Abbeville, AL                  |
            | HowHeardAbout | Event                          |
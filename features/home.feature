Feature: Epam HOME pAGE

    @dataDriven
    Scenario Outline: Search <Word>
        Given   I navigate to HomePage
        When    I click to Search button
        Then    I search "<Word>"
        And     I verify "<Word>" entered is on the label
        Examples:
            | Word       |
            | automation |
            | cloud      |
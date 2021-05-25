Feature: Login Functionality

  @Admin
  Scenario Outline: enter System UserName and click search button 
    Given User clicks admin tab
    Then User clicks user management tab
    Then User enters system username "<systemusername>"
    Then User clicks search button   

    Examples: 
      | systemusername  |
      | admin     |   
      
  @PIM
  Scenario Outline: User is redirected to federated provider
  Given User clicks PIM tab
  Then User enters the ID "<SheetName>" and rownumber <RowNumber>
  
    Examples: 
      | SheetName | RowNumber |
      | data      |         0 |
      | data      |         1 |
     
# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 

@startuml
entity User #eeffff
entity User.Name 
entity Email
entity Password
entity Salt
entity Authorization_Token

entity Organization #eeffff
entity Organization.Name
entity Organization.Creation_date
entity Creator #aaaeee
entity Organization.Description #aaaeee
entity Picture #aaaeee 
entity Address #aaaeee
entity Poll

entity PollType.Name
entity PollType.Description #aaaeee

entity BlackListedUser #eeffff
entity BL_User
entity BL_Poll 

entity WhiteListedUser #eeffff
entity WL_User
entity WL_Poll 

entity Poll #eeffff
entity Poll.Title
entity Poll.Description
Entity Poll.CreationDate
entity End_Date
entity IsWhiteList
entity IsBlackList
entity IsPrivate
entity Link
entity Poll.Type #eeffff


entity QuestionType #eeffff
entity QuestionType.Name
entity QuestionType.Description

entity AnswerOption #eeffff
entity Text
entity Index

entity Question #eeffff
entity Question.Title
entity Question.Description
entity Question.Type


entity Answer #eeffff
entity Content

entity PollResult #eeffff
entity Date
entity Respondent


entity QuestionFeedback #eeffff
entity QF_Comment
entity QF_Question

entity PollFeedback #eeffff
entity GeneralComment
entity Rating #aaaeee
entity MaxRating #aaaeee
entity Reviewer
entity PF_Poll



User.Name --* User
Email -r-* User
Password --* User
Salt -l-* User
Authorization_Token -u-* User
Poll "0,*"--*"1,1" User
Organization "0,*"--*"0,*" User
PollFeedback "0,*"--*"1" User

Organization.Name -l-* Organization
Organization.Creation_date -u-* Organization
Creator *-d-* Organization
Organization.Description --* Organization
Picture -d-* Organization
Address -r-* Organization
Poll "0,*"--*"1" Organization

PollType.Name -u-* Poll.Type
PollType.Description --* Poll.Type

BlackListedUser -u-* BL_User
BlackListedUser --* BL_Poll
BlackListedUser "1"--"0,*" User
BlackListedUser "1"--"0,*" Organization
WhiteListedUser -u-* WL_User
WhiteListedUser --* WL_Poll
WhiteListedUser "1"--"0,*" User
WhiteListedUser "1"--"0,*" Organization

Poll.Title -u-* Poll
Poll.Description -u-* Poll
Poll.CreationDate --* Poll
End_Date --* Poll
IsWhiteList --* Poll
IsBlackList -l-* Poll
IsPrivate -r-* Poll
Link -u-* Poll
Poll.Type "0,*"-d-*"1" Poll
Question "1"--*"0,*" Poll

QuestionType.Name -u-* QuestionType 
QuestionType.Description -d-* QuestionType
QuestionType "0,*"--"1" Question
QuestionType "0,*"--"1,1" Answer

Text --* AnswerOption
Index --* AnswerOption

AnswerOption "0,*"--*"1" Question
Question --* Question.Type
Question.Title --* Question
Question.Description -l-* Question
AnswerFeedback "0,*"--*"1,1" Question

Answer --* Content
Answer "0,*"--*"1,1" Question

Date --* PollResult
Comment --* PollResult
Respondent --* PollResult
Answer "0,*"--*"1" PollResult

QF_Comment --* QuestionFeedback
QuestionFeedback *--* QF_Question

GeneralComment -l-* PollFeedback
Rating --* PollFeedback
MaxRating --* PollFeedback
Reviewer -u-* PollFeedback
PF_Poll -u-* PollFeedback
QuestionFeedback "0,*"-u-*"1,1" PollFeedback

@enduml

- ER-модель
- реляційна схема


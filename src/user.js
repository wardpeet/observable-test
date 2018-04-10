import { BehaviorSubject } from "rxjs";

const user$ = new BehaviorSubject({"AccountId":null,"AccountType":null,"Lastname":null,"Firstname":null,"BirthDate":"\/Date(1523311200000)\/","Gender":null,"CountryCode":null,"ZipCode":null,"City":null,"Email":null,"ZipCodeOfInterest":null,"CityOfInterest":null,"FacebookId":null,"IsAnonymous":false,"ShowPersonalDetails":false,"SubscriptionType":null,"SubscriptionStatus":null,"SubscriptionEndDate":null,"OrderNumber":null,"IsSessionQuotaExceeded":false,"DebugInfo":null,"IsTestUser":false,"HashI":null,"IdentityHash":null,"HashA":null,"IpA":false,"AuthLevel":0,"AuthType":null,"Street":null,"HouseNumber":null});

setTimeout(() => {
  console.log("timeout");
  user$.next({"AccountId":"21a509b5-c242-45e1-bff8-b3615521ab3e","AccountType":"Full","Lastname":"Testlab","Firstname":"Dcc","BirthDate":"\/Date(713829600000)\/","Gender":"FEMALE","CountryCode":null,"ZipCode":"9120","City":null,"Email":"dcc-testlab@mediahuis.be","ZipCodeOfInterest":"9120","CityOfInterest":null,"FacebookId":null,"IsAnonymous":false,"ShowPersonalDetails":true,"SubscriptionType":"D","SubscriptionStatus":"1","SubscriptionEndDate":null,"OrderNumber":"0003436552","IsSessionQuotaExceeded":false,"DebugInfo":"{get_from_thread.currentprincipal}","IsTestUser":false,"HashI":"9e4dd1f5f235e23323f0bb87a1d279c9","IdentityHash":null,"HashA":"3ad03d4c90e8daac7f2bcd1b8c437124","IpA":false,"AuthLevel":40,"AuthType":"AuthenticateUP","Street":null,"HouseNumber":null});
}, 3000);

export default user$;

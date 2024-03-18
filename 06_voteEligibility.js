var voteEligible=function(arg1) {
    if (arg1==0 || arg1<0 || arg1>130 || arg1==null) {
        console.log(`Invalid data :${arg1}`);
    } else {
        if (arg1<18) {
            console.log(`not eligible for vote :${arg1}`);
        } else {
            console.log(`eligible for vote :${arg1}`);
        }
        
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
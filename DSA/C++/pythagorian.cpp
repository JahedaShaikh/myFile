#include<iostream>
using namespace std;
bool check(int x, int y, int z){
    int a, b, c;
    a=max(x, max(y,z));
    if(a==x){
        b=y;
        c=z;
    }
    else if(a==y){
        b=x;
        c=z;
    }
    else{
        b=z;
        c=y;
    }
    if(a*a==b*b+c*c){
        return true;
    }
    return false;
}


int main(){
    int x,y,z;
    cin>>x>>y>>z;

    if(check(x,y,z)){
        cout<<"pythagorian number"<<endl;
    }
    else{
        cout<<"not pythagorian number"<<endl;
    }
return 0;
}
import React from 'react'
import renderer from 'react-test-renderer';
import AppButton from './app/components/AppButton';
import AppHeader from './app/components/AppHeader';
import AppListCard from './app/components/AppListCard';
import AppScreen from './app/components/AppScreen';
import AppText from './app/components/AppText';
import SplashScreen from './app/screens/SplashScreen';

it('Button renders correctly', () =>{
    const tree = renderer
    .create(<AppButton
                style={{ backgroundColor:"#4B77BE"}}
                onPress={()=> console.log("Button pressed")}    
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})
it('Screen renders correctly', () =>{
    const tree = renderer
    .create(<AppScreen
                style={{flex:1,alignSelf:'stretch',padding: 20,width:'100%',}}
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('Text renders correctly', () =>{
    const tree = renderer
    .create(<AppText
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('Splash Screen renders correctly', () =>{
    const tree = renderer
    .create(<SplashScreen
    
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

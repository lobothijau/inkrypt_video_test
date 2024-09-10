import 'package:flutter/material.dart';
import 'package:inkrypt_flutter/screens/features_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(children: [
        Image.asset("assets/images/bg.jpg"),
        SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const SizedBox(
                height: 100,
              ),
              Center(
                child: RichText(
                  textAlign: TextAlign.center,
                  text: const TextSpan(
                    text: 'Welcome to\nmy ',
                    style: TextStyle(
                        fontSize: 30,
                        fontFamily: "SpaceGrotesk",
                        fontWeight: FontWeight.bold,
                        color: Colors.white),
                    children: <TextSpan>[
                      TextSpan(
                          text: 'video player',
                          style: TextStyle(
                              color: Color.fromRGBO(0, 255, 255, 100))),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 16),
              const Text(
                "Ensure your privacy and keep your content safe and secure.",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 20,
                  color: Colors.white,
                  fontFamily: "SpaceGrotesk",
                ),
              ),
              Expanded(child: Image.asset("assets/images/logo.png"),),
              GestureDetector(
                onTap: (){
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const FeaturesScreen()),
                  );
                },
                child: Container(
                  width: 312,
                  decoration: BoxDecoration(
                    border: Border.all(
                      color: const Color.fromRGBO(192, 140, 224, 100),
                    ),
                    borderRadius:
                    const BorderRadius.all(Radius.circular(40.0)),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(4.0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Expanded(
                          child: Text(
                            'Get More Information',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontFamily: "SpaceGrotesk",
                              fontWeight: FontWeight.bold,
                              fontSize: 16,
                              color: Colors.white,
                            ),
                          ),
                        ),
                        Image.asset(
                          "assets/images/arrow_up_button.png",
                          height: 40,
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 56,)
            ],
          ),
        ),
      ]),
    );
  }
}

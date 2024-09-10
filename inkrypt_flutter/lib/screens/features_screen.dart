import 'package:flutter/material.dart';
import 'package:inkrypt_flutter/components/feature_card.dart';
import 'package:inkrypt_flutter/screens/about_screen.dart';

class FeaturesScreen extends StatelessWidget {
  const FeaturesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(children: [
        Image.asset("assets/images/bg.jpg"),
        SafeArea(
          child: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  const Text(
                    "Unlock Secure Streaming",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                        fontSize: 30,
                        fontFamily: "SpaceGrotesk",
                        fontWeight: FontWeight.bold,
                        color: Colors.white),
                  ),
                  const SizedBox(
                    height: 24,
                  ),
                  GestureDetector(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const AboutScreen()),
                        );
                      },
                      child: const FeatureCard(
                        title: "About App",
                        assetName: "assets/images/about_icon.png",
                      )),
                  const SizedBox(
                    height: 24,
                  ),
                  const FeatureCard(
                    title: "Privacy Policy",
                    assetName: "assets/images/privacy_icon.png",
                  ),
                  const SizedBox(
                    height: 24,
                  ),
                  const FeatureCard(
                    title: "Terms & Condition",
                    assetName: "assets/images/terms_icon.png",
                  ),
                ],
              ),
            ),
          ),
        ),
      ]),
    );
  }
}

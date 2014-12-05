var testfloorStair = " 'floorstairscale':'1 1 1', 'floorstairrotation':'-1 -1 -1 0', 'floorstairtranslation':'9.55 -1.6 0' ";	//Colocar parametros aqui para testar

function floorStair(attr){ //nome do Prototype	- Necessário: ________
	return "\n\
	\
	<!-- <ProtoDeclare name='floorStair' appinfo='first floor'>\n\
		<ProtoInterface>\n\
			<field name='floorStairTextureUrl' type='MFString' accessType='inputOutput'/>\n\
			<field name='floorStairBoxTextureUrl' type='MFString' accessType='inputOutput'/>\n\
			<field name='floorStairEntranceTextureUrl' type='MFString' accessType='inputOutput'/>\n\
			<field name='floorStairStairsTextureUrl' type='MFString' accessType='inputOutput'/>\n\
			<field name='floorStairColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
			<field name='floorStairScale' type='SFVec3f' value='1 1 1' accessType='inputOutput'/> \n\
			<field name='floorStairTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
			<field name='floorStairRotation' type='SFRotation' value='-1 -1 -1 0' accessType='inputOutput'/>\n\
		</ProtoInterface>  -->\n\
\n\
	<Transform DEF='1Floor' translation='"+ attr.floorstairtranslation +"' rotation='"+ attr.floorstairrotation +"' scale='"+ attr.floorstairscale +"'>\n\
		<!-- <IS>\n\
			<connect nodeField='translation' protoField='floorStairTranslation'/>\n\
		</IS>\n\
		<IS>\n\
			<connect nodeField='rotation' protoField='floorStairRotation'/>\n\
		</IS>\n\
		<IS>\n\
			<connect nodeField='scale' protoField='floorStairScale'/>\n\
		</IS> -->\n\
		<Transform DEF='Box' translation='0.0 0.0 0.0'>\n\
			<Shape>\n\
				<Appearance >\n\
					<Material  diffuseColor='0.3451 0.5608 0.8824'/>\n\
					<ImageTexture url='texture/stone50.jpg' />\n\
				</Appearance>\n\
				<IndexedFaceSet  DEF='Box01-FACES'  coordIndex=' 0 6 7 -1 7 1 0 -1 38 1 39 -1 17 56 33 -1 33 34 17 -1 7 6 9 -1 9 8 7 -1 1 7 14 -1 14 15 1 -1 13 1 15 -1 15 14 16 -1 16 13 15 -1 13 16 12 -1 12 10 13 -1 12 11 46 -1 12 16 8 -1 8 5 12 -1 16 7 8 -1 16 14 7 -1 13 39 1 -1 6 0 22 -1 22 23 6 -1 21 6 23 -1 17 19 21 -1 21 20 17 -1 22 20 21 -1 21 23 22 -1 20 0 57 -1 20 22 0 -1 25 9 21 -1 21 19 25 -1 21 9 6 -1 31 32 24 -1 24 18 31 -1 24 25 19 -1 19 18 24 -1 53 9 25 -1 25 54 53 -1 24 32 25 -1 5 26 11 -1 11 12 5 -1 46 11 27 -1 27 47 46 -1 28 30 29 -1 47 26 28 -1 28 48 47 -1 26 27 11 -1 31 19 17 -1 17 34 31 -1 33 32 31 -1 31 34 33 -1 54 25 32 -1 54 32 33 -1 54 33 56 -1 31 18 19 -1 42 5 8 -1 8 37 42 -1 40 26 5 -1 5 2 40 -1 43 42 37 -1 44 43 37 -1 45 44 37 -1 37 3 38 -1 38 45 37 -1 38 44 45 -1 41 40 43 -1 44 38 39 -1 43 44 39 -1 41 43 39 -1 40 2 42 -1 42 43 40 -1 38 0 1 -1 3 4 55 -1 38 3 55 -1 55 57 0 -1 38 55 0 -1 10 41 39 -1 39 13 10 -1 42 2 5 -1 28 29 30 -1 30 28 26 -1 26 40 41 -1 30 26 41 -1 30 41 10 -1 28 30 10 -1 48 28 10 -1 48 10 49 -1 49 52 46 -1 48 49 46 -1 47 48 46 -1 52 49 10 -1 46 52 10 -1 46 10 12 -1 47 27 26 -1 3 37 8 -1 4 3 8 -1 53 4 8 -1 9 53 8 -1 17 20 57 -1 57 56 17 -1 57 55 59 -1 56 57 59 -1 56 59 54 -1 59 58 53 -1 53 54 59 -1 55 58 59 -1 53 58 55 -1 55 4 53 -1' solid='true' ccw='true'>\n\
					<Coordinate  DEF='Box01-COORD'  point='-2.5 0.0 -1.25, 2.5 0.0 -1.25, 0.85 0.0 1.25, 0.85 0.0 0.35, -0.85 0.0 0.35, 0.85 0.6 1.25, -2.5 0.6 -1.25, 2.5 0.6 -1.25, 0.85 0.6 0.35, -0.85 0.6 0.35, 1.8 0.0 0.25, 2.5 0.6 0.25, 1.8 0.6 0.25, 1.8 0.0 -0.35, 2.5 0.6 -0.35, 2.5 0.0 -0.35, 1.8 0.6 -0.35, -1.8 0.0 0.25, -2.5 0.6 0.25, -1.8 0.6 0.25, -1.8 0.0 -0.35, -1.8 0.6 -0.35, -2.5 0.0 -0.35, -2.5 0.6 -0.35, -2.5 0.6 1.23, -0.8595 0.6 1.23, 0.8896 0.6 1.24, 2.5 0.6 1.23, 0.8896 0.0 1.24, 0.885 0.0 1.23, 0.885 0.0 1.237, -2.49 0.5757 0.25, -2.49 0.5997 1.23, -2.48 0.0 1.23, -2.48 0.0 0.25, -2.5 0.0 0.2499, -2.5 0.5757 0.25, 0.85 0.5782 0.35, 0.86 0.0 0.2497, 0.87 0.0 0.3329, 0.87 0.2068 1.245, 0.87 0.0 1.237, 0.85 0.5997 1.235, 0.87 0.5998 1.235, 0.87 0.5754 0.2356, 0.85 0.5754 0.2356, 2.49 0.5757 0.25, 2.49 0.5997 1.23, 2.48 0.0416 1.23, 2.48 0.03829 0.2601, 2.5 0.07647 0.2501, 2.5 0.5757 0.25, 2.481 0.07643 0.2501, -0.85 0.5782 0.35, -0.8648 0.5997 1.23, -0.86 0.0 0.2497, -0.87 0.0 1.225, -0.87 0.0 0.3329, -0.85 0.5754 0.2356, -0.87 0.5754 0.2356, '/>\n\
				</IndexedFaceSet>\n\
			</Shape>\n\
		</Transform>\n\
		<Transform  DEF='Stairs'  translation='0.0 0.0 1.101'>\n\
			<Shape >\n\
				<Appearance >\n\
					<Material  diffuseColor='0.8902 0.5961 0.5961'/>\n\
					<ImageTexture url='texture/stairs.jpg' />\n\
				</Appearance>\n\
				<IndexedFaceSet  DEF='Stairs-FACES'  coordIndex=' 0 2 3 -1 3 1 0 -1 4 5 7 -1 7 6 4 -1 0 1 5 -1 5 4 0 -1 1 3 7 -1 7 5 1 -1 3 2 6 -1 6 7 3 -1 2 0 4 -1 4 6 2 -1 8 10 11 -1 11 9 8 -1 12 13 15 -1 15 14 12 -1 8 9 13 -1 13 12 8 -1 9 11 15 -1 15 13 9 -1 11 10 14 -1 14 15 11 -1 10 8 12 -1 12 14 10 -1 16 18 19 -1 19 17 16 -1 20 21 23 -1 23 22 20 -1 16 17 21 -1 21 20 16 -1 17 19 23 -1 23 21 17 -1 19 18 22 -1 22 23 19 -1 18 16 20 -1 20 22 18 -1' solid='true' ccw='true'>\n\
					<Coordinate  DEF='Stairs-COORD'  point='-0.85 0.0 0.15, 0.85 0.0 0.15, -0.85 0.0 -0.15, 0.85 0.0 -0.15, -0.85 0.175 0.15, 0.85 0.175 0.15, -0.85 0.175 -0.15, 0.85 0.175 -0.15, -0.85 0.35 -0.45, 0.85 0.35 -0.45, -0.85 0.35 -0.75, 0.85 0.35 -0.75, -0.85 0.525 -0.45, 0.85 0.525 -0.45, -0.85 0.525 -0.75, 0.85 0.525 -0.75, -0.85 0.175 -0.15, 0.85 0.175 -0.15, -0.85 0.175 -0.45, 0.85 0.175 -0.45, -0.85 0.35 -0.15, 0.85 0.35 -0.15, -0.85 0.35 -0.45, 0.85 0.35 -0.45, '/>\n\
				</IndexedFaceSet>\n\
			</Shape>\n\
		</Transform>\n\
		<Transform  DEF='floorEntranceInt'  translation='0.0 0.6 0.0'>\n\
			<Shape>\n\
				<Appearance >\n\
					<Material  diffuseColor='0.8353 0.6039 0.898'/>\n\
					<ImageTexture url='texture/entrance.jpg' />\n\
				</Appearance>\n\
				<IndexedFaceSet  DEF='floorEntranceInt-FACES'  coordIndex=' 12 1 10 -1 0 2 3 -1 3 1 0 -1 0 1 4 -1 4 5 0 -1 0 18 19 -1 19 2 0 -1 17 15 6 -1 17 6 2 -1 17 2 19 -1 2 6 7 -1 7 3 2 -1 7 9 13 -1 1 3 11 -1 11 10 1 -1 10 11 13 -1 13 12 10 -1 12 13 9 -1 9 8 12 -1 12 8 4 -1 12 4 1 -1 13 3 7 -1 13 11 3 -1 5 14 16 -1 16 18 0 -1 5 16 0 -1 14 5 4 -1 14 4 8 -1 8 9 7 -1 14 8 7 -1 15 14 7 -1 6 15 7 -1 14 15 17 -1 17 16 14 -1 18 16 17 -1 17 19 18 -1' solid='true' ccw='true'>\n\
					<Coordinate  DEF='floorEntranceInt-COORD'  point='-2.5 0.0 -1.25, 2.5 0.0 -1.25, -2.5 0.1 -1.25, 2.5 0.1 -1.25, 0.9531 0.0 0.25, -0.9531 0.0 0.25, -0.9531 0.1 0.25, 0.9531 0.1 0.25, 1.8 0.0 0.25, 1.8 0.1 0.25, 2.5 0.0 -0.35, 2.5 0.1 -0.35, 1.8 0.0 -0.35, 1.8 0.1 -0.35, -1.8 0.0 0.25, -1.8 0.1 0.25, -1.8 0.0 -0.35, -1.8 0.1 -0.35, -2.5 0.0 -0.35, -2.5 0.1 -0.35, '/>\n\
				</IndexedFaceSet>\n\
			</Shape>\n\
		</Transform>\n\
		<Transform DEF='floorStair' translation='0.0 0.6 0.775'>\n\
			<Shape>\n\
				<Appearance >\n\
					<Material  diffuseColor='0.2235 0.03137 0.5333'/>\n\
					<ImageTexture url='texture/floorStair.jpg' />\n\
				</Appearance>\n\
				<IndexedFaceSet  DEF='floorStair-FACES'  coordIndex=' 12 14 0 -1 12 0 2 -1 9 12 2 -1 9 2 3 -1 9 3 1 -1 9 1 8 -1 8 1 5 -1 5 11 8 -1 1 3 7 -1 7 5 1 -1 3 2 6 -1 6 7 3 -1 2 0 4 -1 4 6 2 -1 4 0 14 -1 14 15 4 -1 10 11 5 -1 10 5 7 -1 10 7 6 -1 13 10 6 -1 13 6 4 -1 13 4 15 -1 8 11 10 -1 10 9 8 -1 12 9 10 -1 10 13 12 -1 14 12 13 -1 13 15 14 -1' solid='true' ccw='true'>\n\
					<Coordinate  DEF='floorStair-COORD'  point='-2.55 0.0 0.525, 2.55 0.0 0.525, -2.55 0.0 -0.525, 2.55 0.0 -0.525, -2.55 0.11 0.525, 2.55 0.11 0.525, -2.55 0.11 -0.525, 2.55 0.11 -0.525, 0.85 0.0 0.525, 0.85 0.0 -0.425, 0.85 0.11 -0.425, 0.85 0.11 0.525, -0.85 0.0 -0.425, -0.85 0.11 -0.425, -0.85 0.0 0.525, -0.85 0.11 0.525, '/>\n\
				</IndexedFaceSet>\n\
			</Shape>\n\
		</Transform>\n\
		<Transform  DEF='FrontLeftSide'  translation='-1.675 0.0 1.24'>\n\
			<Transform  translation='0.0 0.3 0.0'>\n\
				<Group DEF='FrontSide'>\n\
					<Shape>\n\
						<Appearance >\n\
							<Material  diffuseColor='0.5255 0.02353 0.02353'/>\n\
							<ImageTexture url='texture/stoneStairs.jpg'/>\n\
							<TextureTransform scale='1.65 0.5'/>\n\
						</Appearance>\n\
						<Box size='1.65 0.6 0.02'></Box>\n\
					</Shape>\n\
				</Group>\n\
			</Transform>\n\
		</Transform>\n\
		<Transform  DEF='FrontRightSide'  translation='1.71 0.0 1.24'>\n\
			<Transform  translation='0.0 0.3 0.0'>\n\
				<Group USE='FrontSide' />\n\
			</Transform>\n\
		</Transform>\n\
		<Transform  DEF='ExtLeftSide'  translation='-2.49 -0.01222 0.7501' rotation='0.01222 -0.9999 0.01222  -1.571'>\n\
			<Transform  translation='0.0 0.3 0.0'>\n\
				<Group DEF='LateralSide'>\n\
					<Shape >\n\
						<Appearance >\n\
							<Material  diffuseColor='0.6941 0.1098 0.5843'/>\n\
							<ImageTexture url='texture/stoneStairs.jpg'/>\n\
							<TextureTransform scale='1.0 0.5'/>\n\
						</Appearance>\n\
						<Box  size='1.0 0.6 0.02'></Box>\n\
					</Shape>\n\
				</Group>\n\
			</Transform>\n\
		</Transform>\n\
		<Transform  DEF='IntRightSide'  translation='0.86 -0.01222 0.7501' rotation='0.01222 -0.9999 0.01222  -1.571'>\n\
			<Transform  translation='0.0 0.3 0.0'>\n\
				<Group USE='LateralSide'/>\n\
			</Transform>\n\
		</Transform>\n\
		<Transform  DEF='ExtRightSide'  translation='2.49 -0.01222 0.7501' rotation='0.01222 -0.9999 0.01222  -1.571'>\n\
			<Transform  translation='0.0 0.3 0.0'>\n\
				<Group USE='LateralSide'/>\n\
			</Transform>\n\
		</Transform>\n\
		<Transform  DEF='IntLeftSide'  translation='-0.86 -0.01222 0.7501' rotation='0.01222 -0.9999 0.01222  -1.571'>\n\
			<Transform  translation='0.0 0.3 0.0'>\n\
				<Group USE='LateralSide'/>\n\
			</Transform>\n\
		</Transform>\n\
	</Transform>\n\
	\
	";
}

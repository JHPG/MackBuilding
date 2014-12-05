var testCorner = " 'cornerrotation':'-1 -1 -1 0', 'cornerfootertranslation':'0 0 0', 'cornerdrippingtranslation':'0 0 0', 'cornerwall175texturetransformrotation':'0.0', 'cornerwall123texturetransformrotation':'0.0', 'cornerwall30texturetransformrotation':'0.0', 'cornerdripping175texturetransformrotation':'0.0', 'cornerdripping123texturetransformrotation':'0.0', 'cornerdripping30texturetransformrotation':'0.0', 'cornerfooter175texturetransformrotation':'0.0', 'cornerfooter123texturetransformrotation':'0.0', 'cornerfooter30texturetransformrotation':'0.0', 'cornercolor':'0.58 0.72 0.95', 'cornertranslation':'-.725 1.85 0', 'cornerdripping30texturetransformscale':'0.30 1', 'cornerdripping123texturetransformscale':'1.23 1', 'cornerdripping175texturetransformscale':'1.75 1', 'cornerwall30texturetransformscale':'0.30 1', 'cornerwall123texturetransformscale':'1.23 1', 'cornerwall175texturetransformscale':'1.75 1', 'cornerfooter30texturetransformscale':'0.30 1', 'cornerfooter123texturetransformscale':'1.23 1', 'cornerfooter175texturetransformscale':'1.75 1' ";

function Corner(attr){ //nome do Prototype - Necessário: __________
	return "\n\
	\
<!-- <ProtoDeclare name='Corner' appinfo='corners'>\n\
	<ProtoInterface>\n\
		<field name='cornerColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
		<field name='cornerTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
		<field name='cornerRotation' type='SFRotation' value='-1 -1 -1 0' accessType='inputOutput'/>\n\
		<field name='cornerFooterTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
		<field name='cornerDrippingTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
		<field name='cornerWall175TextureTransformRotation' type='SFFloat' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerWall175TextureTransformScale' type='SFVec2f' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerWall123TextureTransformRotation' type='SFFloat' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerWall123TextureTransformScale' type='SFVec2f' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerWall30TextureTransformRotation' type='SFFloat' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerWall30TextureTransformScale' type='SFVec2f' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerDripping175TextureTransformRotation' type='SFFloat' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerDripping175TextureTransformScale' type='SFVec2f' accessType='inputOutput'/>\n\
		<field name='cornerDripping123TextureTransformRotation' type='SFFloat' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerDripping123TextureTransformScale' type='SFVec2f' accessType='inputOutput'/>\n\
		<field name='cornerDripping30TextureTransformRotation' type='SFFloat' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerDripping30TextureTransformScale' type='SFVec2f' accessType='inputOutput'/>\n\
		<field name='cornerFooter175TextureTransformRotation' type='SFFloat' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerFooter175TextureTransformScale' type='SFVec2f' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerFooter123TextureTransformRotation' type='SFFloat' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerFooter123TextureTransformScale' type='SFVec2f' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerFooter30TextureTransformRotation' type='SFFloat' value='0.0' accessType='inputOutput' />\n\
		<field name='cornerFooter30TextureTransformScale' type='SFVec2f' value='0.0' accessType='inputOutput' />\n\
</ProtoInterface> \n\
<ProtoBody> -->\n\
	<Transform DEF='Corner' translation='"+ attr.cornertranslation +"' rotation='"+ attr.cornerrotation +"' >\n\
		<!-- <IS>\n\
			 <connect nodeField='translation' protoField='cornerTranslation'/>\n\
		</IS>\n\
		<IS>\n\
			 <connect nodeField='rotation' protoField='cornerRotation'/>\n\
			</IS> -->\n\
			<Transform translation='0.01 0 0'>\n\
				<Shape DEF='ExtWall123'>\n\
					<Appearance>\n\
						<Material  DEF='WallColor' diffuseColor='0.84 0.70 0.60'/>\n\
						<ImageTexture DEF='WallTexture' url='texture/tijolo.jpg'/>\n\
						<TextureTransform DEF='WallTextureTransform123' rotation='"+ attr.cornerwall123texturetransformrotation +"' scale='"+ attr.cornerwall123texturetransformscale +"'> \n\
							<!-- <IS>\n\
								<connect nodeField='rotation' protoField='cornerWall123TextureTransformRotation'/>\n\
							</IS>\n\
							<IS>\n\
								<connect nodeField='scale' protoField='cornerWall123TextureTransformScale'/>\n\
							</IS> -->\n\
						</TextureTransform>\n\
					</Appearance>\n\
					<Box size='1.23 3.70 .30'></Box>\n\
				</Shape>\n\
			</Transform>\n\
			<Transform translation='-0.475 0 -1.025'>\n\
				<Shape DEF='ExtWall175'>\n\
					<Appearance>\n\
						<Material USE='WallColor'/>\n\
						<ImageTexture USE='WallTexture'/>\n\
						<TextureTransform DEF='Wall175TextureTransform' rotation='"+ attr.cornerwall175texturetransformrotation +"' scale='"+ attr.cornerwall175texturetransformscale +"'>\n\
							<!-- <IS>\n\
								<connect nodeField='rotation' protoField='cornerWall175TextureTransformRotation'/>\n\
							</IS>\n\
							<IS>\n\
								<connect nodeField='scale' protoField='cornerWall175TextureTransformScale'/>\n\
							</IS> -->\n\
						</TextureTransform>\n\
					</Appearance>\n\
					<Box size='.30 3.70 1.75'></Box>\n\
				</Shape>\n\
			</Transform>\n\
			<Transform translation='-.615 0 0'>\n\
				<Shape DEF='ExtWall30'>\n\
					<Appearance>\n\
						<Material  USE='WallColor'/>\n\
						<ImageTexture USE='WallTexture'/>\n\
						<TextureTransform DEF='WallTextureTransform30' rotation='"+ attr.cornerwall30texturetransformrotation +"' scale='"+ attr.cornerwall30texturetransformscale +"'>\n\
							<!-- <IS>\n\
								<connect nodeField='rotation' protoField='cornerWall30TextureTransformRotation'/>\n\
							</IS>\n\
							<IS>\n\
								<connect nodeField='scale' protoField='cornerWall30TextureTransformScale'/>\n\
							</IS> -->\n\
						</TextureTransform>\n\
					</Appearance>\n\
					<Box size='.02 3.70 0.3'></Box>\n\
				</Shape>\n\
			</Transform>\n\
			<Transform DEF='FooterExt' translation='"+ attr.cornerfootertranslation +"'>\n\
				<!-- <IS>\n\
					<connect nodeField='translation' protoField='cornerFooterTranslation'/>\n\
				</IS> -->\n\
				<Transform translation='0 -2.65 0'>\n\
					<Group DEF='Footer'>\n\
						<Transform translation='0.01 0 0'>\n\
							<Shape >\n\
								<Appearance >\n\
									<Material DEF='FooterColor' diffuseColor='0.5 0.5 0.5'/>\n\
									<ImageTexture DEF='FooterTexture' url='texture/stone.jpg'/>\n\
									<TextureTransform DEF='Footer123TextureTransform' rotation='"+ attr.cornerfooter123texturetransformrotation +"' scale='"+ attr.cornerfooter123texturetransformscale +"'>\n\
										<!-- <IS>\n\
											<connect nodeField='rotation' protoField='cornerFooter123TextureTransformRotation'/>\n\
										</IS>\n\
										<IS>\n\
											<connect nodeField='scale' protoField='cornerFooter123TextureTransformScale'/>\n\
										</IS> -->\n\
									</TextureTransform>\n\
								</Appearance>\n\
								<Box size='1.23 1.60 .30'></Box>\n\
							</Shape>\n\
						</Transform>\n\
						<Transform translation='-0.475 0 -1.025'>\n\
							<Shape >\n\
								<Appearance >\n\
									<Material  USE='FooterColor'/>\n\
									<ImageTexture USE='FooterTexture'/>\n\
									<TextureTransform DEF='Footer175TextureTransform' rotation='"+ attr.cornerfooter175texturetransformrotation +"' scale='"+ attr.cornerfooter175texturetransformscale +"'>\n\
										<!-- <IS>\n\
											<connect nodeField='rotation' protoField='cornerFooter175TextureTransformRotation'/>\n\
										</IS>\n\
										<IS>\n\
											<connect nodeField='scale' protoField='cornerFooter175TextureTransformScale'/>\n\
										</IS> -->\n\
									</TextureTransform>\n\
								</Appearance>\n\
								<Box size='.30 1.6 1.75'></Box>\n\
							</Shape>\n\
						</Transform>\n\
						<Transform translation='-.615 0 0'>\n\
							<Shape>\n\
								<Appearance>\n\
									<Material  USE='FooterColor'/>\n\
									<ImageTexture USE='FooterTexture'/>\n\
									<TextureTransform DEF='Footer30TextureTransform' rotation='"+ attr.cornerfooter30texturetransformrotation +"' scale='"+ attr.cornerfooter30texturetransformscale +"'>\n\
										<!-- <IS>\n\
											<connect nodeField='rotation' protoField='cornerFooter30TextureTransformRotation'/>\n\
										</IS>\n\
										<IS>\n\
											<connect nodeField='scale' protoField='cornerFooter30TextureTransformScale'/>\n\
										</IS> -->\n\
									</TextureTransform>\n\
								</Appearance>\n\
								<Box size='.02 1.6 0.3'></Box>\n\
							</Shape>\n\
						</Transform>\n\
					</Group>\n\
				</Transform>\n\
			</Transform>\n\
			<Transform DEF='DrippingExt' translation='"+ attr.cornerdrippingtranslation +"'>          \n\
				<!-- <IS>\n\
					<connect nodeField='translation' protoField='cornerDrippingTranslation'/>\n\
				</IS> -->\n\
				<Transform translation='0 2 0'>    \n\
					<Group DEF='Dripping'>\n\
						<Transform translation='0.01 0 0'>\n\
							<Shape>\n\
								<Appearance >\n\
									<Material DEF='DrippingColor' diffuseColor='0.9 0.9 0.9'/>\n\
									<ImageTexture DEF='DrippingTexture' url='texture/pingadeira.jpg'/>\n\
									<TextureTransform DEF='Dripping123TextureTransform' rotation='"+ attr.cornerdripping123texturetransformrotation +"' scale='"+ attr.cornerdripping123texturetransformscale +"'>\n\
										<!-- <IS>\n\
											<connect nodeField='rotation' protoField='cornerDripping123TextureTransformRotation'/>\n\
										</IS>\n\
										<IS>\n\
											<connect nodeField='scale' protoField='cornerDripping123TextureTransformScale'/>\n\
										</IS> -->\n\
									</TextureTransform>\n\
								</Appearance>\n\
								<Box size='1.23 .30 .30'></Box>\n\
							</Shape>\n\
						</Transform>\n\
						<Transform translation='-0.475 0 -1.025'>\n\
							<Shape >\n\
								<Appearance >\n\
									<Material  USE='DrippingColor'/>\n\
									<ImageTexture USE='DrippingTexture'/>\n\
									<TextureTransform DEF='Dripping175TextureTransform' rotation='"+ attr.cornerdripping175texturetransformrotation +"' scale='"+ attr.cornerdripping175texturetransformscale +"'>\n\
										<!-- <IS>\n\
											<connect nodeField='rotation' protoField='cornerDripping175TextureTransformRotation'/>\n\
										</IS>\n\
										<IS>\n\
											<connect nodeField='scale' protoField='cornerDripping175TextureTransformScale'/>\n\
										</IS> -->\n\
									</TextureTransform>\n\
								</Appearance>\n\
								<Box size='.30 .30 1.75'></Box>\n\
							</Shape>\n\
						</Transform>\n\
						<Transform translation='-.615 0 0'>\n\
							<Shape>\n\
								<Appearance>\n\
									<Material  USE='DrippingColor'/>\n\
									<ImageTexture USE='DrippingTexture'/>\n\
									<TextureTransform DEF='Dripping30TextureTransform' rotation='"+ attr.cornerdripping30texturetransformrotation +"' scale='"+ attr.cornerdripping30texturetransformscale +"'>\n\
										<!-- <IS>\n\
											<connect nodeField='rotation' protoField='cornerDripping30TextureTransformRotation'/>\n\
										</IS>\n\
										<IS>\n\
											<connect nodeField='scale' protoField='cornerDripping30TextureTransformScale'/>\n\
										</IS> -->\n\
									</TextureTransform>\n\
								</Appearance>\n\
								<Box size='.02 0.30 0.30'></Box>\n\
							</Shape>\n\
						</Transform>\n\
					</Group>\n\
				</Transform>\n\
			</Transform>\n\
		</Transform>\n\
	\
	";
}




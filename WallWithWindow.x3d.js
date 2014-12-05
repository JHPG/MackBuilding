var testWallWithWindow = " 'framewindowcolor':'1 1 1', 'wallwindowtranslation':'0 0 0', 'wallwindowrotation':'-1 -1 -1 0' ";	//Colocar parametros aqui para testar

function WallWithWindow(attr){ //nome do Prototype	- Necessário: frameWindowColor, wallWindowTranslation e wallWindowRotation
	return "\n\
	\
	 <!-- <ProtoDeclare name='WallWithWindow' appinfo='Simple model of a external wall with a window in arc'>\n\
			<ProtoInterface>\n\
				-<field name='wallWindowColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
				<field name='frameWindowColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
				<field name='wallWindowTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
				<field name='wallWindowRotation' type='SFRotation' value='-1 -1 -1 0' accessType='inputOutput'/>\n\
		   </ProtoInterface> \n\
		   <ProtoBody> -->\n\
		   	<Transform DEF='WallWindow' translation='"+ attr.wallwindowtranslation +"' rotation='"+ attr.wallwindowrotation +"'>\n\
				 <!--  <IS>\n\
					 <connect nodeField='translation' protoField='wallWindowTranslation'/>\n\
				  </IS>\n\
				  <IS>\n\
					 <connect nodeField='rotation' protoField='wallWindowRotation'/>\n\
					</IS> -->\n\
					<Transform  DEF='WallWithWindowExt'  rotation='0.0 -1.0 0.0  -1.571'>\n\
						<Shape>\n\
							<Appearance>\n\
								<Material diffuseColor='0.6902 0.102 0.102'/>\n\
								<ImageTexture url='texture/tijoloWindow.jpg'/>\n\
								<TextureTransform scale='1 .5' translation='-0.01 -0.05' />\n\
							</Appearance>\n\
							<IndexedFaceSet  DEF='WallWithWindowExt-FACES'  coordIndex=' 4 5 7 -1 7 6 4 -1 0 1 5 -1 5 4 0 -1 3 2 6 -1 6 7 3 -1 2 28 32 -1 6 2 32 -1 6 32 8 -1 6 8 9 -1 6 9 10 -1 4 6 10 -1 4 10 11 -1 4 11 12 -1 4 12 13 -1 4 13 14 -1 4 14 15 -1 4 15 16 -1 0 4 16 -1 0 16 17 -1 29 0 17 -1 19 31 3 -1 19 3 7 -1 18 19 7 -1 20 18 7 -1 21 20 7 -1 21 7 5 -1 22 21 5 -1 23 22 5 -1 24 23 5 -1 25 24 5 -1 26 25 5 -1 27 26 5 -1 27 5 1 -1 33 27 1 -1 33 1 30 -1 29 30 1 -1 1 0 29 -1 28 2 3 -1 3 31 28 -1 35 9 8 -1 8 34 35 -1 37 11 10 -1 10 36 37 -1 39 13 12 -1 12 38 39 -1 41 15 14 -1 14 40 41 -1 53 17 16 -1 16 42 53 -1 34 43 44 -1 44 35 34 -1 35 44 45 -1 45 36 35 -1 36 45 46 -1 46 37 36 -1 37 46 47 -1 47 38 37 -1 38 47 48 -1 48 39 38 -1 39 48 49 -1 49 40 39 -1 40 49 50 -1 50 41 40 -1 41 50 51 -1 51 42 41 -1 53 42 51 -1 51 54 53 -1 52 55 43 -1 43 34 52 -1 55 19 18 -1 18 43 55 -1 44 43 18 -1 18 20 44 -1 45 44 20 -1 20 21 45 -1 46 45 21 -1 21 22 46 -1 47 46 22 -1 22 23 47 -1 48 47 23 -1 23 24 48 -1 49 48 24 -1 24 25 49 -1 50 49 25 -1 25 26 50 -1 51 50 26 -1 26 27 51 -1 54 51 27 -1 27 33 54 -1 34 8 32 -1 32 52 34 -1 36 10 9 -1 9 35 36 -1 38 12 11 -1 11 37 38 -1 40 14 13 -1 13 39 40 -1 42 16 15 -1 15 41 42 -1 30 29 17 -1 17 33 30 -1 28 31 19 -1 32 28 19 -1 19 55 52 -1 32 19 52 -1 53 54 33 -1 33 17 53 -1' solid='true' ccw='true'>\n\
								<Coordinate  DEF='WallWithWindowExt-COORD'  point='-0.15 0.0 0.85, 0.15 0.0 0.85, -0.15 0.0 -0.85, 0.15 0.0 -0.85, -0.15 3.7 0.85, 0.15 3.7 0.85, -0.15 3.7 -0.85, 0.15 3.7 -0.85, -0.15 2.104 -0.5909, -0.15 2.3 -0.5196, -0.15 2.46 -0.3857, -0.15 2.564 -0.2052, -0.15 2.6 0.0, -0.15 2.564 0.2052, -0.15 2.46 0.3857, -0.15 2.3 0.5196, -0.15 2.104 0.5909, -0.15 2.0 0.5954, 0.15 2.104 -0.5909, 0.15 2.0 -0.5932, 0.15 2.3 -0.5196, 0.15 2.46 -0.3857, 0.15 2.564 -0.2052, 0.15 2.6 0.0, 0.15 2.564 0.2052, 0.15 2.46 0.3857, 0.15 2.3 0.5196, 0.15 2.104 0.5909, -0.15 0.0 -0.6, -0.15 0.0 0.6, 0.15 0.0 0.6, 0.15 0.0 -0.6, -0.15 2.0 -0.5954, 0.15 2.0 0.5954, -0.06 2.104 -0.5909, -0.06 2.3 -0.5196, -0.06 2.46 -0.3857, -0.06 2.564 -0.2052, -0.06 2.6 0.0, -0.06 2.564 0.2052, -0.06 2.46 0.3857, -0.06 2.3 0.5196, -0.06 2.104 0.5909, 0.12 2.104 -0.5909, 0.12 2.3 -0.5196, 0.12 2.46 -0.3857, 0.12 2.564 -0.2052, 0.12 2.6 0.0, 0.12 2.564 0.2052, 0.12 2.46 0.3857, 0.12 2.3 0.5196, 0.12 2.104 0.5909, -0.06 2.0 -0.5909, -0.06 2.0 0.5909, 0.12 2.0 0.5909, 0.12 2.0 -0.5909, '/>\n\
							</IndexedFaceSet>\n\
						</Shape>\n\
					</Transform>\n\
					<Transform translation='-0.3 0.0 -0.2'>\n\
						<Transform  DEF='FrameWindowBottomLeft'  translation='0.0 0.0 0.0'>\n\
							<Shape DEF='FrameWindow'>\n\
								<Appearance >\n\
									<Material  DEF='FrameBottomLeftColor' diffuseColor='"+ attr.framewindowcolor +"'/>\n\
										<!-- <IS>\n\
											<connect nodeField='diffuseColor' protoField='frameWindowColor'/>\n\
										</IS>--> \n\
									</Material> \n\
								</Appearance>\n\
								<IndexedFaceSet  DEF='FrameWindowBottomLeft-FACES'  coordIndex=' 0 2 3 -1 3 1 0 -1 4 5 7 -1 7 6 4 -1 1 3 7 -1 7 5 1 -1 2 0 4 -1 4 6 2 -1 8 11 10 -1 10 9 8 -1 13 14 11 -1 11 8 13 -1 14 13 12 -1 12 15 14 -1 9 10 15 -1 15 12 9 -1 4 0 9 -1 9 12 4 -1 8 1 5 -1 13 8 5 -1 12 13 5 -1 12 5 4 -1 7 3 11 -1 11 14 7 -1 10 2 6 -1 15 10 6 -1 14 15 6 -1 14 6 7 -1 9 0 21 -1 9 21 20 -1 17 21 0 -1 16 17 0 -1 16 0 1 -1 20 16 1 -1 20 1 8 -1 9 20 8 -1 11 3 23 -1 11 23 22 -1 19 23 3 -1 18 19 3 -1 18 3 2 -1 22 18 2 -1 22 2 10 -1 11 22 10 -1 16 19 18 -1 18 17 16 -1 20 23 19 -1 19 16 20 -1 23 20 21 -1 21 22 23 -1 17 18 22 -1 22 21 17 -1' solid='true' ccw='true'>\n\
									<Coordinate  DEF='FrameWindowBottomLeft-COORD'  point='-0.3 0.0 0.025, 0.3 0.0 0.025, -0.3 0.0 -0.025, 0.3 0.0 -0.025, -0.3 2.0 0.025, 0.3 2.0 0.025, -0.3 2.0 -0.025, 0.3 2.0 -0.025, 0.25 1.02 0.025, -0.25 1.02 0.025, -0.25 1.02 -0.025, 0.25 1.02 -0.025, -0.25 1.95 0.025, 0.25 1.95 0.025, 0.25 1.95 -0.025, -0.25 1.95 -0.025, 0.25 0.05 0.025, -0.25 0.05 0.025, -0.25 0.05 -0.025, 0.25 0.05 -0.025, 0.25 0.98 0.025, -0.25 0.98 0.025, -0.25 0.98 -0.025, 0.25 0.98 -0.025, '/>\n\
								</IndexedFaceSet>\n\
							</Shape>\n\
						</Transform>\n\
	<Transform  DEF='GlassBottomLeft'  translation='0.0 0.05 0.0' >\n\
		<Transform  translation='0.0 0.465 0.0'>\n\
			<Shape DEF='Glass'>\n\
				<Appearance >\n\
					<Material DEF='GlassAp' diffuseColor='0.8392 0.898 0.651' transparency='0.3'/>\n\
				</Appearance>\n\
				<Box size='0.5 0.93 0.02'></Box>\n\
			</Shape>\n\
		</Transform>\n\
	</Transform>\n\
	<Transform  DEF='GlassTopLeft'  translation='0.0 1.02 0.0'>\n\
		<Transform  translation='0.0 0.465 0.0'>\n\
			<Shape USE='Glass' />\n\
		</Transform>\n\
	</Transform>\n\
	<Transform  DEF='GlassBottomRight'  translation='0.6 0.05 0.0'>\n\
		<Transform  translation='0.0 0.465 0.0'>\n\
			<Shape USE='Glass' />\n\
		</Transform>\n\
	</Transform>\n\
	<Transform  DEF='GlassTopRight'  translation='0.6 1.02 0.0'>\n\
		<Transform  translation='0.0 0.465 0.0'>\n\
			<Shape USE='Glass' />\n\
		</Transform>\n\
	</Transform>\n\
	<Transform  DEF='FrameWindowBottomRight'  translation='0.6 0.0 0.0'>\n\
		<Shape USE='FrameWindow' />\n\
	</Transform>\n\
	<Transform  DEF='FrameWindowTop'  translation='0.3 2.0 -0.025' rotation='-1.0 0.0 0.0  -1.571'>\n\
		<Shape>\n\
			<Appearance>\n\
				<Material  DEF='FrameTopColor' diffuseColor='"+ attr.framewindowcolor +"' />\n\
					<!-- <IS>\n\
						<connect nodeField='diffuseColor' protoField='frameWindowColor'/>\n\
					</IS>\n\
				</Material> -->\n\
			</Appearance>\n\
			<IndexedFaceSet  DEF='FrameWindowTop-FACES'  coordIndex=' 0 1 20 -1 20 19 0 -1 1 2 21 -1 21 20 1 -1 2 3 22 -1 22 21 2 -1 3 4 23 -1 23 22 3 -1 4 5 24 -1 24 23 4 -1 5 6 25 -1 25 24 5 -1 6 7 26 -1 26 25 6 -1 7 8 27 -1 27 26 7 -1 8 9 28 -1 28 27 8 -1 9 10 29 -1 29 28 9 -1 10 11 30 -1 30 29 10 -1 11 12 31 -1 31 30 11 -1 12 13 32 -1 32 31 12 -1 13 14 33 -1 33 32 13 -1 14 15 34 -1 34 33 14 -1 15 16 35 -1 35 34 15 -1 16 17 36 -1 36 35 16 -1 17 18 37 -1 37 36 17 -1 18 0 19 -1 19 37 18 -1 19 20 39 -1 39 38 19 -1 20 21 40 -1 40 39 20 -1 21 22 41 -1 41 40 21 -1 22 23 42 -1 42 41 22 -1 23 24 43 -1 43 42 23 -1 24 25 44 -1 44 43 24 -1 25 26 45 -1 45 44 25 -1 26 27 46 -1 46 45 26 -1 27 28 47 -1 47 46 27 -1 28 29 48 -1 48 47 28 -1 29 30 49 -1 49 48 29 -1 30 31 50 -1 50 49 30 -1 31 32 51 -1 51 50 31 -1 32 33 52 -1 52 51 32 -1 33 34 53 -1 53 52 33 -1 34 35 54 -1 54 53 34 -1 35 36 55 -1 55 54 35 -1 36 37 56 -1 56 55 36 -1 37 19 38 -1 38 56 37 -1 38 39 58 -1 58 57 38 -1 39 40 59 -1 59 58 39 -1 40 41 60 -1 60 59 40 -1 41 42 61 -1 61 60 41 -1 42 43 62 -1 62 61 42 -1 43 44 63 -1 63 62 43 -1 44 45 64 -1 64 63 44 -1 45 46 65 -1 65 64 45 -1 46 47 66 -1 66 65 46 -1 47 48 67 -1 67 66 47 -1 48 49 68 -1 68 67 48 -1 49 50 69 -1 69 68 49 -1 50 51 70 -1 70 69 50 -1 51 52 71 -1 71 70 51 -1 52 53 72 -1 72 71 52 -1 53 54 73 -1 73 72 53 -1 54 55 74 -1 74 73 54 -1 55 56 75 -1 75 74 55 -1 56 38 57 -1 57 75 56 -1 57 58 77 -1 77 76 57 -1 58 59 78 -1 78 77 58 -1 59 60 79 -1 79 78 59 -1 60 61 80 -1 80 79 60 -1 61 62 81 -1 81 80 61 -1 62 63 82 -1 82 81 62 -1 63 64 83 -1 83 82 63 -1 64 65 84 -1 84 83 64 -1 65 66 85 -1 85 84 65 -1 66 67 86 -1 86 85 66 -1 67 68 87 -1 87 86 67 -1 68 69 88 -1 88 87 68 -1 69 70 89 -1 89 88 69 -1 70 71 90 -1 90 89 70 -1 71 72 91 -1 91 90 71 -1 72 73 92 -1 92 91 72 -1 73 74 93 -1 93 92 73 -1 74 75 94 -1 94 93 74 -1 75 57 76 -1 76 94 75 -1 76 77 96 -1 96 95 76 -1 77 78 97 -1 97 96 77 -1 78 79 98 -1 98 97 78 -1 79 80 99 -1 99 98 79 -1 80 81 100 -1 100 99 80 -1 81 82 101 -1 101 100 81 -1 82 83 102 -1 102 101 82 -1 83 84 103 -1 103 102 83 -1 84 85 104 -1 104 103 84 -1 85 86 105 -1 105 104 85 -1 86 87 106 -1 106 105 86 -1 87 88 107 -1 107 106 87 -1 88 89 108 -1 108 107 88 -1 89 90 109 -1 109 108 89 -1 90 91 110 -1 110 109 90 -1 91 92 111 -1 111 110 91 -1 92 93 112 -1 112 111 92 -1 93 94 113 -1 113 112 93 -1 94 76 95 -1 95 113 94 -1 137 135 136 -1 154 116 115 -1 115 153 154 -1 156 118 117 -1 117 155 156 -1 158 120 119 -1 119 157 158 -1 160 122 121 -1 121 159 160 -1 162 124 123 -1 123 161 162 -1 164 126 125 -1 125 163 164 -1 166 128 127 -1 127 165 166 -1 168 130 129 -1 129 167 168 -1 170 132 131 -1 131 169 170 -1 152 171 172 -1 172 153 152 -1 153 172 173 -1 173 154 153 -1 154 173 174 -1 174 155 154 -1 155 174 175 -1 175 156 155 -1 156 175 176 -1 176 157 156 -1 157 176 177 -1 177 158 157 -1 158 177 178 -1 178 159 158 -1 159 178 179 -1 179 160 159 -1 160 179 180 -1 180 161 160 -1 161 180 181 -1 181 162 161 -1 162 181 182 -1 182 163 162 -1 163 182 183 -1 183 164 163 -1 164 183 184 -1 184 165 164 -1 165 184 185 -1 185 166 165 -1 166 185 186 -1 186 167 166 -1 167 186 187 -1 187 168 167 -1 168 187 188 -1 188 169 168 -1 169 188 189 -1 189 170 169 -1 170 189 171 -1 171 152 170 -1 153 115 114 -1 114 152 153 -1 155 117 116 -1 116 154 155 -1 157 119 118 -1 118 156 157 -1 159 121 120 -1 120 158 159 -1 161 123 122 -1 122 160 161 -1 163 125 124 -1 124 162 163 -1 165 127 126 -1 126 164 165 -1 167 129 128 -1 128 166 167 -1 169 131 130 -1 130 168 169 -1 170 152 114 -1 114 132 170 -1 172 134 133 -1 133 173 172 -1 171 190 134 -1 134 172 171 -1 174 135 137 -1 137 175 174 -1 173 133 135 -1 135 174 173 -1 176 138 139 -1 139 177 176 -1 175 137 138 -1 138 176 175 -1 178 140 141 -1 141 179 178 -1 177 139 140 -1 140 178 177 -1 180 142 143 -1 143 181 180 -1 179 141 142 -1 142 180 179 -1 182 144 145 -1 145 183 182 -1 181 143 144 -1 144 182 181 -1 184 146 147 -1 147 185 184 -1 183 145 146 -1 146 184 183 -1 186 148 149 -1 149 187 186 -1 185 147 148 -1 148 186 185 -1 188 150 151 -1 151 189 188 -1 187 149 150 -1 150 188 187 -1 189 151 190 -1 190 171 189 -1 114 115 2 -1 114 2 1 -1 114 1 0 -1 3 2 115 -1 115 116 3 -1 116 117 3 -1 4 3 117 -1 117 118 4 -1 118 119 4 -1 119 120 4 -1 5 4 120 -1 120 121 5 -1 121 122 5 -1 6 5 122 -1 122 123 6 -1 123 124 6 -1 7 6 124 -1 124 125 7 -1 125 126 7 -1 8 7 126 -1 126 127 8 -1 127 128 8 -1 9 8 128 -1 128 129 9 -1 129 130 9 -1 10 9 130 -1 130 131 10 -1 149 104 105 -1 105 150 149 -1 149 148 104 -1 147 103 104 -1 104 148 147 -1 147 146 103 -1 145 102 103 -1 103 146 145 -1 145 144 102 -1 143 101 102 -1 102 144 143 -1 143 142 101 -1 141 100 101 -1 101 142 141 -1 141 140 100 -1 139 99 100 -1 100 140 139 -1 139 138 99 -1 138 137 99 -1 133 96 97 -1 133 97 98 -1 135 133 98 -1 136 135 98 -1 136 98 99 -1 137 136 99 -1 96 133 134 -1 134 95 96 -1 134 190 95 -1 190 113 95 -1 194 195 265 -1 265 193 194 -1 266 208 18 -1 192 266 18 -1 192 18 17 -1 191 192 17 -1 191 17 16 -1 191 16 15 -1 191 15 14 -1 193 191 14 -1 194 193 14 -1 194 14 13 -1 195 194 13 -1 196 195 13 -1 196 13 12 -1 197 196 12 -1 198 197 12 -1 198 12 11 -1 199 198 11 -1 200 199 11 -1 200 11 10 -1 201 200 10 -1 202 201 10 -1 203 202 10 -1 204 203 10 -1 205 204 10 -1 206 205 10 -1 207 206 10 -1 207 10 131 -1 114 0 18 -1 132 114 18 -1 132 18 208 -1 131 132 208 -1 207 131 208 -1 267 226 113 -1 113 190 151 -1 113 151 150 -1 267 113 150 -1 225 267 150 -1 225 150 105 -1 224 225 105 -1 223 224 105 -1 222 223 105 -1 221 222 105 -1 220 221 105 -1 219 220 105 -1 218 219 105 -1 105 106 107 -1 107 108 109 -1 105 107 109 -1 218 105 109 -1 217 218 109 -1 216 217 109 -1 215 216 109 -1 214 215 109 -1 213 214 109 -1 212 213 109 -1 211 212 109 -1 210 211 109 -1 109 110 111 -1 109 111 112 -1 210 109 112 -1 209 210 112 -1 112 113 226 -1 209 112 226 -1 245 208 266 -1 266 227 245 -1 227 228 247 -1 247 246 227 -1 228 229 248 -1 248 247 228 -1 229 230 249 -1 249 248 229 -1 230 231 250 -1 250 249 230 -1 231 232 251 -1 251 250 231 -1 232 233 252 -1 252 251 232 -1 233 234 253 -1 253 252 233 -1 234 235 254 -1 254 253 234 -1 235 236 255 -1 255 254 235 -1 236 237 256 -1 256 255 236 -1 237 238 257 -1 257 256 237 -1 238 239 258 -1 258 257 238 -1 239 240 259 -1 259 258 239 -1 240 241 260 -1 260 259 240 -1 241 242 261 -1 261 260 241 -1 242 243 262 -1 262 261 242 -1 243 244 263 -1 263 262 243 -1 244 245 264 -1 264 263 244 -1 245 227 246 -1 246 264 245 -1 246 209 226 -1 226 264 246 -1 247 210 209 -1 209 246 247 -1 248 211 210 -1 210 247 248 -1 249 212 211 -1 211 248 249 -1 250 213 212 -1 212 249 250 -1 251 214 213 -1 213 250 251 -1 252 215 214 -1 214 251 252 -1 253 216 215 -1 215 252 253 -1 254 217 216 -1 216 253 254 -1 255 218 217 -1 217 254 255 -1 256 219 218 -1 218 255 256 -1 257 220 219 -1 219 256 257 -1 258 221 220 -1 220 257 258 -1 259 222 221 -1 221 258 259 -1 260 223 222 -1 222 259 260 -1 261 224 223 -1 223 260 261 -1 262 225 224 -1 224 261 262 -1 263 267 225 -1 225 262 263 -1 264 226 267 -1 267 263 264 -1 227 266 192 -1 192 228 227 -1 229 228 192 -1 192 191 229 -1 230 229 191 -1 191 193 230 -1 231 230 193 -1 193 265 231 -1 232 231 265 -1 265 195 232 -1 233 232 195 -1 195 196 233 -1 234 233 196 -1 196 197 234 -1 235 234 197 -1 197 198 235 -1 236 235 198 -1 198 199 236 -1 237 236 199 -1 199 200 237 -1 238 237 200 -1 200 201 238 -1 239 238 201 -1 201 202 239 -1 240 239 202 -1 202 203 240 -1 241 240 203 -1 203 204 241 -1 242 241 204 -1 204 205 242 -1 243 242 205 -1 205 206 243 -1 244 243 206 -1 206 207 244 -1 245 244 207 -1 207 208 245 -1' solid='true' ccw='true'>\n\
				<Coordinate  DEF='FrameWindowTop-COORD'  point='0.6 0.0 0.0, 0.5898 0.0 -0.1102, 0.5595 0.0 -0.2167, 0.5101 0.0 -0.3159, 0.4434 0.0 -0.4042, 0.3616 0.0 -0.4788, 0.2674 0.0 -0.5371, 0.1642 0.0 -0.5771, 0.05536 0.0 -0.5974, -0.05536 0.0 -0.5974, -0.1642 0.0 -0.5771, -0.2674 0.0 -0.5371, -0.3616 0.0 -0.4788, -0.4434 0.0 -0.4042, -0.5101 0.0 -0.3159, -0.5595 0.0 -0.2167, -0.5898 0.0 -0.1102, -0.6 0.0 0.0, 0.0 0.0 0.0, 0.6 0.01 0.0, 0.5898 0.01 -0.1102, 0.5595 0.01 -0.2167, 0.5101 0.01 -0.3159, 0.4434 0.01 -0.4042, 0.3616 0.01 -0.4788, 0.2674 0.01 -0.5371, 0.1642 0.01 -0.5771, 0.05536 0.01 -0.5974, -0.05536 0.01 -0.5974, -0.1642 0.01 -0.5771, -0.2674 0.01 -0.5371, -0.3616 0.01 -0.4788, -0.4434 0.01 -0.4042, -0.5101 0.01 -0.3159, -0.5595 0.01 -0.2167, -0.5898 0.01 -0.1102, -0.6 0.01 0.0, 0.0 0.01 0.0, 0.6 0.02 0.0, 0.5898 0.02 -0.1102, 0.5595 0.02 -0.2167, 0.5101 0.02 -0.3159, 0.4434 0.02 -0.4042, 0.3616 0.02 -0.4788, 0.2674 0.02 -0.5371, 0.1642 0.02 -0.5771, 0.05536 0.02 -0.5974, -0.05536 0.02 -0.5974, -0.1642 0.02 -0.5771, -0.2674 0.02 -0.5371, -0.3616 0.02 -0.4788, -0.4434 0.02 -0.4042, -0.5101 0.02 -0.3159, -0.5595 0.02 -0.2167, -0.5898 0.02 -0.1102, -0.6 0.02 0.0, 0.0 0.02 0.0, 0.6 0.03 0.0, 0.5898 0.03 -0.1102, 0.5595 0.03 -0.2167, 0.5101 0.03 -0.3159, 0.4434 0.03 -0.4042, 0.3616 0.03 -0.4788, 0.2674 0.03 -0.5371, 0.1642 0.03 -0.5771, 0.05536 0.03 -0.5974, -0.05536 0.03 -0.5974, -0.1642 0.03 -0.5771, -0.2674 0.03 -0.5371, -0.3616 0.03 -0.4788, -0.4434 0.03 -0.4042, -0.5101 0.03 -0.3159, -0.5595 0.03 -0.2167, -0.5898 0.03 -0.1102, -0.6 0.03 0.0, 0.0 0.03 0.0, 0.6 0.04 0.0, 0.5898 0.04 -0.1102, 0.5595 0.04 -0.2167, 0.5101 0.04 -0.3159, 0.4434 0.04 -0.4042, 0.3616 0.04 -0.4788, 0.2674 0.04 -0.5371, 0.1642 0.04 -0.5771, 0.05536 0.04 -0.5974, -0.05536 0.04 -0.5974, -0.1642 0.04 -0.5771, -0.2674 0.04 -0.5371, -0.3616 0.04 -0.4788, -0.4434 0.04 -0.4042, -0.5101 0.04 -0.3159, -0.5595 0.04 -0.2167, -0.5898 0.04 -0.1102, -0.6 0.04 0.0, 0.0 0.04 0.0, 0.6 0.05 0.0, 0.5898 0.05 -0.1102, 0.5595 0.05 -0.2167, 0.5101 0.05 -0.3159, 0.4434 0.05 -0.4042, 0.3616 0.05 -0.4788, 0.2674 0.05 -0.5371, 0.1642 0.05 -0.5771, 0.05536 0.05 -0.5974, -0.05536 0.05 -0.5974, -0.1642 0.05 -0.5771, -0.2674 0.05 -0.5371, -0.3616 0.05 -0.4788, -0.4434 0.05 -0.4042, -0.5101 0.05 -0.3159, -0.5595 0.05 -0.2167, -0.5898 0.05 -0.1102, -0.6 0.05 0.0, 0.0 0.05 0.0, 0.5311 0.0 -0.05, 0.5289 0.0 -0.09613, 0.5225 0.0 -0.1419, 0.512 0.0 -0.1868, 0.4973 0.0 -0.2306, 0.4786 0.0 -0.2729, 0.4562 0.0 -0.3132, 0.4301 0.0 -0.3513, 0.4006 0.0 -0.3868, 0.3679 0.0 -0.4195, 0.3324 0.0 -0.449, 0.2943 0.0 -0.4751, 0.2539 0.0 -0.4976, 0.2117 0.0 -0.5162, 0.1679 0.0 -0.5309, 0.1229 0.0 -0.5415, 0.07719 0.0 -0.5479, 0.03106 0.0 -0.55, 0.03106 0.0 -0.05, 0.5257 0.05 -0.119, 0.53 0.05 -0.07307, 0.5173 0.05 -0.1644, 0.512 0.05 -0.1868, 0.4973 0.05 -0.2306, 0.4786 0.05 -0.2729, 0.4562 0.05 -0.3132, 0.4301 0.05 -0.3513, 0.4006 0.05 -0.3868, 0.3679 0.05 -0.4195, 0.3324 0.05 -0.449, 0.2943 0.05 -0.4751, 0.2539 0.05 -0.4976, 0.2117 0.05 -0.5162, 0.1679 0.05 -0.5309, 0.1229 0.05 -0.5415, 0.07719 0.05 -0.5479, 0.03106 0.05 -0.55, 0.03106 0.05 -0.05, 0.5311 0.007146 -0.05, 0.5289 0.007146 -0.09613, 0.5225 0.007146 -0.1419, 0.512 0.007146 -0.1868, 0.4973 0.007146 -0.2306, 0.4786 0.007146 -0.2729, 0.4562 0.007146 -0.3132, 0.4301 0.007146 -0.3513, 0.4006 0.007146 -0.3868, 0.3679 0.007146 -0.4195, 0.3324 0.007146 -0.449, 0.2943 0.007146 -0.4751, 0.2539 0.007146 -0.4976, 0.2117 0.007146 -0.5162, 0.1679 0.007146 -0.5309, 0.1229 0.007146 -0.5415, 0.07719 0.007146 -0.5479, 0.03106 0.007146 -0.55, 0.03106 0.007146 -0.05, 0.5311 0.03435 -0.05, 0.5289 0.03435 -0.09613, 0.5225 0.03435 -0.1419, 0.512 0.03435 -0.1868, 0.4973 0.03435 -0.2306, 0.4786 0.03435 -0.2729, 0.4562 0.03435 -0.3132, 0.4301 0.03435 -0.3513, 0.4006 0.03435 -0.3868, 0.3679 0.03435 -0.4195, 0.3324 0.03435 -0.449, 0.2943 0.03435 -0.4751, 0.2539 0.03435 -0.4976, 0.2117 0.03435 -0.5162, 0.1679 0.03435 -0.5309, 0.1229 0.03435 -0.5415, 0.07719 0.03435 -0.5479, 0.03106 0.03435 -0.55, 0.03106 0.03435 -0.05, 0.521 0.05 -0.05, -0.5236 0.0 -0.119, -0.5279 0.0 -0.07307, -0.5151 0.0 -0.1644, -0.5099 0.0 -0.1868, -0.4859 0.0 -0.2517, -0.4653 0.0 -0.293, -0.428 0.0 -0.3513, -0.3984 0.0 -0.3868, -0.3658 0.0 -0.4195, -0.3303 0.0 -0.449, -0.2922 0.0 -0.4751, -0.2518 0.0 -0.4976, -0.2096 0.0 -0.5162, -0.1658 0.0 -0.5309, -0.1208 0.0 -0.5415, -0.07508 0.0 -0.5479, -0.02894 0.0 -0.55, -0.02894 0.0 -0.05, -0.5289 0.05 -0.05, -0.5268 0.05 -0.09613, -0.5204 0.05 -0.1419, -0.5099 0.05 -0.1868, -0.4952 0.05 -0.2306, -0.4765 0.05 -0.2729, -0.441 0.05 -0.3323, -0.4132 0.05 -0.3691, -0.3821 0.05 -0.4032, -0.348 0.05 -0.4343, -0.3112 0.05 -0.4621, -0.272 0.05 -0.4863, -0.2307 0.05 -0.5069, -0.1877 0.05 -0.5236, -0.1433 0.05 -0.5362, -0.09795 0.05 -0.5447, -0.05201 0.05 -0.5489, -0.02894 0.05 -0.05, -0.5289 0.007146 -0.05, -0.5268 0.007146 -0.09613, -0.5204 0.007146 -0.1419, -0.5099 0.007146 -0.1868, -0.4952 0.007146 -0.2306, -0.4765 0.007146 -0.2729, -0.4541 0.007146 -0.3132, -0.428 0.007146 -0.3513, -0.3984 0.007146 -0.3868, -0.3658 0.007146 -0.4195, -0.3303 0.007146 -0.449, -0.2922 0.007146 -0.4751, -0.2518 0.007146 -0.4976, -0.2096 0.007146 -0.5162, -0.1658 0.007146 -0.5309, -0.1208 0.007146 -0.5415, -0.07508 0.007146 -0.5479, -0.02894 0.007146 -0.55, -0.02894 0.007146 -0.05, -0.5289 0.03435 -0.05, -0.5268 0.03435 -0.09613, -0.5204 0.03435 -0.1419, -0.5099 0.03435 -0.1868, -0.4952 0.03435 -0.2306, -0.4765 0.03435 -0.2729, -0.4541 0.03435 -0.3132, -0.428 0.03435 -0.3513, -0.3984 0.03435 -0.3868, -0.3658 0.03435 -0.4195, -0.3303 0.03435 -0.449, -0.2922 0.03435 -0.4751, -0.2518 0.03435 -0.4976, -0.2096 0.03435 -0.5162, -0.1658 0.03435 -0.5309, -0.1208 0.03435 -0.5415, -0.07508 0.03435 -0.5479, -0.02894 0.03435 -0.55, -0.02894 0.03435 -0.05, -0.4977 0.0 -0.2218, -0.5189 0.0 -0.05, -0.02894 0.05 -0.54, '/>\n\
			</IndexedFaceSet>\n\
		</Shape>\n\
		<Transform  DEF='GlassCurveRight'  translation='0.03 0.02 -0.05'>\n\
			<Shape DEF='GlassTop'>\n\
				<Appearance >\n\
					<Material  USE='GlassAp'/>\n\
				</Appearance>\n\
				<IndexedFaceSet  DEF='GlassCurveRight-FACES'  coordIndex=' 0 2 1 -1 0 3 2 -1 0 4 3 -1 0 5 4 -1 0 6 5 -1 0 7 6 -1 0 8 7 -1 0 9 8 -1 0 10 9 -1 0 11 10 -1 0 12 11 -1 0 13 12 -1 0 14 13 -1 0 15 14 -1 0 16 15 -1 0 17 16 -1 0 18 17 -1 0 19 18 -1 0 21 20 -1 0 1 21 -1 1 22 21 -1 1 2 22 -1 2 23 22 -1 2 3 23 -1 3 24 23 -1 3 4 24 -1 4 25 24 -1 4 5 25 -1 5 26 25 -1 5 6 26 -1 6 27 26 -1 6 7 27 -1 7 28 27 -1 7 8 28 -1 8 29 28 -1 8 9 29 -1 9 30 29 -1 9 10 30 -1 10 31 30 -1 10 11 31 -1 11 32 31 -1 11 12 32 -1 12 33 32 -1 12 13 33 -1 13 34 33 -1 13 14 34 -1 14 35 34 -1 14 15 35 -1 15 36 35 -1 15 16 36 -1 16 37 36 -1 16 17 37 -1 17 38 37 -1 17 18 38 -1 18 39 38 -1 18 19 39 -1 19 20 39 -1 19 0 20 -1 20 41 40 -1 20 21 41 -1 21 42 41 -1 21 22 42 -1 22 43 42 -1 22 23 43 -1 23 44 43 -1 23 24 44 -1 24 45 44 -1 24 25 45 -1 25 46 45 -1 25 26 46 -1 26 47 46 -1 26 27 47 -1 27 48 47 -1 27 28 48 -1 28 49 48 -1 28 29 49 -1 29 50 49 -1 29 30 50 -1 30 51 50 -1 30 31 51 -1 31 52 51 -1 31 32 52 -1 32 53 52 -1 32 33 53 -1 33 54 53 -1 33 34 54 -1 34 55 54 -1 34 35 55 -1 35 56 55 -1 35 36 56 -1 36 57 56 -1 36 37 57 -1 37 58 57 -1 37 38 58 -1 38 59 58 -1 38 39 59 -1 39 40 59 -1 39 20 40 -1 40 61 60 -1 40 41 61 -1 41 62 61 -1 41 42 62 -1 42 63 62 -1 42 43 63 -1 43 64 63 -1 43 44 64 -1 44 65 64 -1 44 45 65 -1 45 66 65 -1 45 46 66 -1 46 67 66 -1 46 47 67 -1 47 68 67 -1 47 48 68 -1 48 69 68 -1 48 49 69 -1 49 70 69 -1 49 50 70 -1 50 71 70 -1 50 51 71 -1 51 72 71 -1 51 52 72 -1 52 73 72 -1 52 53 73 -1 53 74 73 -1 53 54 74 -1 54 75 74 -1 54 55 75 -1 55 76 75 -1 55 56 76 -1 56 77 76 -1 56 57 77 -1 57 78 77 -1 57 58 78 -1 58 79 78 -1 58 59 79 -1 59 60 79 -1 59 40 60 -1 60 81 80 -1 60 61 81 -1 61 82 81 -1 61 62 82 -1 62 83 82 -1 62 63 83 -1 63 84 83 -1 63 64 84 -1 64 85 84 -1 64 65 85 -1 65 86 85 -1 65 66 86 -1 66 87 86 -1 66 67 87 -1 67 88 87 -1 67 68 88 -1 68 89 88 -1 68 69 89 -1 69 90 89 -1 69 70 90 -1 70 91 90 -1 70 71 91 -1 71 92 91 -1 71 72 92 -1 72 93 92 -1 72 73 93 -1 73 94 93 -1 73 74 94 -1 74 95 94 -1 74 75 95 -1 75 96 95 -1 75 76 96 -1 76 97 96 -1 76 77 97 -1 77 98 97 -1 77 78 98 -1 78 99 98 -1 78 79 99 -1 79 80 99 -1 79 60 80 -1 80 101 100 -1 80 81 101 -1 81 102 101 -1 81 82 102 -1 82 103 102 -1 82 83 103 -1 83 104 103 -1 83 84 104 -1 84 105 104 -1 84 85 105 -1 85 106 105 -1 85 86 106 -1 86 107 106 -1 86 87 107 -1 87 108 107 -1 87 88 108 -1 88 109 108 -1 88 89 109 -1 89 110 109 -1 89 90 110 -1 90 111 110 -1 90 91 111 -1 91 112 111 -1 91 92 112 -1 92 113 112 -1 92 93 113 -1 93 114 113 -1 93 94 114 -1 94 115 114 -1 94 95 115 -1 95 116 115 -1 95 96 116 -1 96 117 116 -1 96 97 117 -1 97 118 117 -1 97 98 118 -1 98 119 118 -1 98 99 119 -1 99 100 119 -1 99 80 100 -1 100 101 102 -1 100 102 103 -1 100 103 104 -1 100 104 105 -1 100 105 106 -1 100 106 107 -1 100 107 108 -1 100 108 109 -1 100 109 110 -1 100 110 111 -1 100 111 112 -1 100 112 113 -1 100 113 114 -1 100 114 115 -1 100 115 116 -1 100 116 117 -1 100 117 118 -1 100 118 119 -1' solid='true' ccw='true'>\n\
					<Coordinate  DEF='GlassCurveRight-COORD'  point='0.0 0.0 0.0, 0.5 0.0 0.0, 0.4981 0.0 -0.04358, 0.4924 0.0 -0.08682, 0.483 0.0 -0.1294, 0.4698 0.0 -0.171, 0.4532 0.0 -0.2113, 0.433 0.0 -0.25, 0.4096 0.0 -0.2868, 0.383 0.0 -0.3214, 0.3536 0.0 -0.3536, 0.3214 0.0 -0.383, 0.2868 0.0 -0.4096, 0.25 0.0 -0.433, 0.2113 0.0 -0.4532, 0.171 0.0 -0.4698, 0.1294 0.0 -0.483, 0.08682 0.0 -0.4924, 0.04358 0.0 -0.4981, 0.0 0.0 -0.5, 0.0 0.0040 0.0, 0.5 0.0040 0.0, 0.4981 0.0040 -0.04358, 0.4924 0.0040 -0.08682, 0.483 0.0040 -0.1294, 0.4698 0.0040 -0.171, 0.4532 0.0040 -0.2113, 0.433 0.0040 -0.25, 0.4096 0.0040 -0.2868, 0.383 0.0040 -0.3214, 0.3536 0.0040 -0.3536, 0.3214 0.0040 -0.383, 0.2868 0.0040 -0.4096, 0.25 0.0040 -0.433, 0.2113 0.0040 -0.4532, 0.171 0.0040 -0.4698, 0.1294 0.0040 -0.483, 0.08682 0.0040 -0.4924, 0.04358 0.0040 -0.4981, 0.0 0.0040 -0.5, 0.0 0.0080 0.0, 0.5 0.0080 0.0, 0.4981 0.0080 -0.04358, 0.4924 0.0080 -0.08682, 0.483 0.0080 -0.1294, 0.4698 0.0080 -0.171, 0.4532 0.0080 -0.2113, 0.433 0.0080 -0.25, 0.4096 0.0080 -0.2868, 0.383 0.0080 -0.3214, 0.3536 0.0080 -0.3536, 0.3214 0.0080 -0.383, 0.2868 0.0080 -0.4096, 0.25 0.0080 -0.433, 0.2113 0.0080 -0.4532, 0.171 0.0080 -0.4698, 0.1294 0.0080 -0.483, 0.08682 0.0080 -0.4924, 0.04358 0.0080 -0.4981, 0.0 0.0080 -0.5, 0.0 0.012 0.0, 0.5 0.012 0.0, 0.4981 0.012 -0.04358, 0.4924 0.012 -0.08682, 0.483 0.012 -0.1294, 0.4698 0.012 -0.171, 0.4532 0.012 -0.2113, 0.433 0.012 -0.25, 0.4096 0.012 -0.2868, 0.383 0.012 -0.3214, 0.3536 0.012 -0.3536, 0.3214 0.012 -0.383, 0.2868 0.012 -0.4096, 0.25 0.012 -0.433, 0.2113 0.012 -0.4532, 0.171 0.012 -0.4698, 0.1294 0.012 -0.483, 0.08682 0.012 -0.4924, 0.04358 0.012 -0.4981, 0.0 0.012 -0.5, 0.0 0.016 0.0, 0.5 0.016 0.0, 0.4981 0.016 -0.04358, 0.4924 0.016 -0.08682, 0.483 0.016 -0.1294, 0.4698 0.016 -0.171, 0.4532 0.016 -0.2113, 0.433 0.016 -0.25, 0.4096 0.016 -0.2868, 0.383 0.016 -0.3214, 0.3536 0.016 -0.3536, 0.3214 0.016 -0.383, 0.2868 0.016 -0.4096, 0.25 0.016 -0.433, 0.2113 0.016 -0.4532, 0.171 0.016 -0.4698, 0.1294 0.016 -0.483, 0.08682 0.016 -0.4924, 0.04358 0.016 -0.4981, 0.0 0.016 -0.5, 0.0 0.02 0.0, 0.5 0.02 0.0, 0.4981 0.02 -0.04358, 0.4924 0.02 -0.08682, 0.483 0.02 -0.1294, 0.4698 0.02 -0.171, 0.4532 0.02 -0.2113, 0.433 0.02 -0.25, 0.4096 0.02 -0.2868, 0.383 0.02 -0.3214, 0.3536 0.02 -0.3536, 0.3214 0.02 -0.383, 0.2868 0.02 -0.4096, 0.25 0.02 -0.433, 0.2113 0.02 -0.4532, 0.171 0.02 -0.4698, 0.1294 0.02 -0.483, 0.08682 0.02 -0.4924, 0.04358 0.02 -0.4981, 0.0 0.02 -0.5, '/>\n\
				</IndexedFaceSet>\n\
			</Shape>\n\
		</Transform>\n\
		<Transform DEF='GlassCurveLeft' translation='-0.03 0.02 -0.05' rotation='0 1 0 1.571'>\n\
			<Shape USE='GlassTop' />\n\
		</Transform>\n\
	</Transform>\n\
</Transform>\n\
\n\
<Transform  DEF='Footer'  translation='0.0 -1.6 0.0'>\n\
	<Transform  translation='0.0 0.8 0.0'>\n\
		<Shape >\n\
			<Appearance>\n\
				<Material  diffuseColor='0.6 0.8941 0.7216'/>\n\
				<ImageTexture url='texture/stone170.jpg' />   \n\
			</Appearance>\n\
			<Box size='1.7 1.6 0.3'></Box>\n\
		</Shape>\n\
	</Transform>\n\
</Transform>\n\
<Transform  DEF='Dripping'  translation='0.0 3.7 0.0'>\n\
	<Transform  translation='0.0 0.15 0.0'>\n\
		<Shape >\n\
			<Appearance>\n\
				<Material diffuseColor='0.6 0.8941 0.7216'/>\n\
				<ImageTexture url='texture/pingadeira.jpg' />\n\
				<TextureTransform scale='1.70 1'/>\n\
			</Appearance>\n\
			<Box  size='1.7 0.3 0.3'></Box>\n\
		</Shape>\n\
	</Transform>\n\
</Transform>    \n\
</Transform>\n\
	\
	";
}

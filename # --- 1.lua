# --- 1. Estoque da Papelaria ---
materiais = ["Caderno", "Lápis", "Borracha"]
materiais.append("Caneta")
materiais.append("Régua")

print("Estoque Atualizado da Papelaria:")
print(materiais)
print("-" * 30)

# --- 2. Controle de Chamada ---
alunos = ["Ana", "Carlos", "João", "Maria"]
removido = alunos.pop(0)

print(f"O aluno {removido} saiu da sala.")
print(f"Lista de chamada atual: {alunos}")
print("-" * 30)

# --- 3. Promoção da Semana (Nova Lista) ---
estoque_loja = ["Arroz", "Feijão", "Macarrão", "Leite", "Açúcar", "Café"]
itens_promocao = estoque_loja[2:5]

print(f"Itens em estoque: {estoque_loja}")
print(f"Itens selecionados para promoção: {itens_promocao}")
print("-" * 30)

# --- 4. Upgrade de Equipamento ---
eletronicos = ["Mouse", "Teclado", "Monitor", "Impressora"]
eletronicos[2] = "Notebook"

print("Lista de equipamentos atualizada:")
print(eletronicos)
print("-" * 30)

# --- 5. Hortifruti (União de Listas) ---
frutas = ["Maçã", "Banana"]
verduras = ["Alface", "Cenoura"]
feira_completa = frutas + verduras

print(f"Setor de Frutas: {frutas}")
print(f"Setor de Verduras: {verduras}")
print(f"Carrinho total: {feira_completa}")
print("-" * 30)

# --- 6. Boletim Escolar ---
notas_turma = [
    [8, 7, 9],  # Aluno 1
    [10, 6, 8], # Aluno 2
    [7, 9, 10]  # Aluno 3
]

print(f"Notas do Aluno 2: {notas_turma[1]}")
print(f"Primeira nota do Aluno 3: {notas_turma[2][0]}")
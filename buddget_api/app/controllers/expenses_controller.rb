class ExpensesController < ApplicationController
  before_action :get_budget, only: [:index, :show, :create, :update, :destroy]
  #before_action :set_expense, only: [:show, :update, :destroy]

  # GET /expenses
  def index
    #ex@expenses = Expense.all
    @expenses = @budget.expenses

    render json: @expenses
  end

  # GET /expenses/1
  def show
    @expense = @budget.expenses.find(params[:id])
  end

  # POST /expenses
  def create
    # @expense = Expense.new(expense_params)
    @expense = @budget.expenses.build(expense_params)
    # byebug
    if @expense.save
      render json: @expense, status: :created, location: @expense
    else
      render json: @expense.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /expenses/1
  def update
    if @expense.update(expense_params)
      render json: @expense
    else
      render json: @expense.errors, status: :unprocessable_entity
    end
  end

  # DELETE /expenses/1
  def destroy
    # byebug
    @expense = @budget.expenses.find_by(id: params[:id])
    @expense.destroy
    # redirect_to item_index_path
    # render json: @expense
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_expense
      @expense = @budget.expenses.find(params[:id])
      # @expense = Expense.find(params[:id])
    end

    def get_budget
      @budget = Budget.find(params[:budget_id])
    end

    # Only allow a list of trusted parameters through.
    def expense_params
      params.require(:expense).permit(:name, :amount)
    end
end
